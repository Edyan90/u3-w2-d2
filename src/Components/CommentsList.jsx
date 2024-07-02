import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentsList = (props) => {
  return (
    <ListGroup>
      {props.commenti.map((commento) => (
        <SingleComment key={commento._id} commenti={commento} ricarica={props.ricarica} />
      ))}
    </ListGroup>
  );
};

export default CommentsList;
