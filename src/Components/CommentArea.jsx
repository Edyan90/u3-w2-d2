import CommentsList from "./CommentsList";
import AddComments from "./AddComments";
import { Alert } from "react-bootstrap";
import { useEffect, useState } from "react";

const CommentArea = (props) => {
  /* state = {
    comments: [],
   isLoading: true,
  }; */
  const [comments, setCommets] = useState([]);
  const fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
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
        setCommets(data);
      })
      .catch((err) => alert(err));
  };
  /* componentDidMount() {
    this.fetchComments();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  } */
  useEffect(() => {
    fetchComments();
  }, [props.asin]);
  return (
    <div className="sticky-top">
      <h6 className="mt-3">Inserisci il tuo feedback:</h6>
      <AddComments asin={props.asin} ricarica={fetchComments} />
      <h5>Comments:</h5>
      {comments.length > 0 ? (
        <CommentsList commenti={comments} asin={props.asin} ricarica={fetchComments} />
      ) : (
        <Alert>non ci sono commenti</Alert>
      )}
    </div>
  );
};

export default CommentArea;
