import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComments from "./AddComments";
import { Alert } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
    /* isLoading: true, */
  };

  fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNTVhYTNhMzhjYjAwMTVmNjNjZWIiLCJpYXQiOjE3MTk0ODk5NjMsImV4cCI6MTcyMDY5OTU2M30.16nMX_VbXAW_QQwS3bouQXrfEJ4NsCBR0NpuVZuH4TA",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nel reperimento dati");
        }
      })
      .then((data) => {
        this.setState({ comments: data });
      })
      .catch((err) => alert(err));
  };
  componentDidMount() {
    this.fetchComments();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  }
  render() {
    console.log(this.props.asin);
    return (
      <div>
        <h6 className="mt-3">Inserisci il tuo feedback:</h6>
        <AddComments asin={this.props.asin} ricarica={this.fetchComments} />
        <h5>Comments:</h5>
        {this.state.comments.length > 0 ? (
          <CommentsList commenti={this.state.comments} asin={this.props.asin} ricarica={this.fetchComments} />
        ) : (
          <Alert>non ci sono commenti</Alert>
        )}
      </div>
    );
  }
}
//here we go again
export default CommentArea;
