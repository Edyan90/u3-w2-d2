import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.commenti.map((commento) => (
          <SingleComment key={commento._id} commenti={commento} ricarica={this.props.ricarica} />
        ))}
      </ListGroup>
    );
  }
}
export default CommentsList;
