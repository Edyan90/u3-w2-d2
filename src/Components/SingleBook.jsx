import { Card, Button, Badge } from "react-bootstrap";
/* import CommentArea from "./CommentArea"; */

const SingleBook = (props) => {
  /*   state = {
    selected: false,
  }; */
  const selezionato = () => {
    props.id(props.book.asin); //qui uso il metodo passato dal padre ovvero BookList per aggiornare lo stato di Asin così da utilizzarlo su CommentArea
  };

  return (
    <Card
      className="col-sm-12 col-md-6 col-lg-4 m-3"
      onClick={selezionato}
      style={{
        width: "18rem",
        height: "43rem",
        border: props.book.asin === props.selected ? "3px solid crimson" : "3px solid grey",
      }}
    >
      <Card.Img variant="top" src={props.book.img} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>{props.book.category}</Card.Text>
      </Card.Body>

      <div className="d-flex justify-content-between align-items-center mt-auto mb-2 mx-3">
        <Button variant="primary">Buy</Button>
        <Badge bg="danger">{props.book.price} €</Badge>
      </div>
    </Card>
  );
};

export default SingleBook;
