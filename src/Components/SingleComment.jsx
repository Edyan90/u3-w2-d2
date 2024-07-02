import { Badge, Button, ListGroupItem } from "react-bootstrap";

const SingleComment = (props) => {
  const deleteComment = (commentID) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + commentID, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNTVhYTNhMzhjYjAwMTVmNjNjZWIiLCJpYXQiOjE3MTk0ODk5NjMsImV4cCI6MTcyMDY5OTU2M30.16nMX_VbXAW_QQwS3bouQXrfEJ4NsCBR0NpuVZuH4TA",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          alert("La recensione è stata elimata!");
        } else {
          throw new Error("la recensione non è stata eliminata!");
        }
      })
      .then((data) => {
        props.ricarica(); //mi son passato la funzione/metodo da CommentArea così da poter aggiornare la lista di commenti senza avere quello eliminato
      })

      .catch((err) => alert(err));
  };

  return (
    <ListGroupItem className="text-center" key={props.commenti._id} style={{ maxWidth: "350px" }}>
      <h6>{props.commenti.author}</h6>
      <p>{props.commenti.comment}</p>
      <Badge>{props.commenti.rate}</Badge>
      <Button variant="danger" className="d-block mx-auto mt-2" onClick={() => deleteComment(props.commenti._id)}>
        Elimina Commento
      </Button>
    </ListGroupItem>
  );
};
export default SingleComment;
