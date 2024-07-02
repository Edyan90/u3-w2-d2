import Card from "react-bootstrap/Card";
import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";
import { Component } from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
/* import MyNav from "./MyNav"; */
const libri = [fantasy, history, horror, romance, scifi];
class AllTheBooks extends Component {
  state = {
    categoria: libri[0],
  };
  render() {
    return (
      <Container fluid="md" className="mt-5">
        <div className="d-flex justify-content-evenly">
          <button className="btn btn-info me-5 mb-5" onClick={() => this.setState({ categoria: fantasy })}>
            fantasy
          </button>
          <button className="btn btn-info me-5 mb-5" onClick={() => this.setState({ categoria: history })}>
            history
          </button>
          <button className="btn btn-info me-5 mb-5" onClick={() => this.setState({ categoria: horror })}>
            horror
          </button>
          <button className="btn btn-info me-5 mb-5" onClick={() => this.setState({ categoria: romance })}>
            romance
          </button>
          <button className="btn btn-info me-5 mb-5" onClick={() => this.setState({ categoria: scifi })}>
            scifi
          </button>
        </div>
        <Row className="justify-content-between gap-5">
          {this.state.categoria.map((libro) => {
            return (
              <Col xs={12} md={12} lg={4} xl={3} key={`id=${libro.asin}`}>
                <Card style={{ width: "18rem", height: "42rem" }}>
                  <Card.Img variant="top" src={libro.img} />
                  <Card.Body>
                    <Card.Title>{libro.title}</Card.Title>
                    <Card.Text>{libro.category}</Card.Text>
                  </Card.Body>
                  <div className="d-flex justify-content-between align-items-center mt-auto mb-2 mx-3">
                    <Button variant="primary">Buy</Button>
                    <Badge bg="danger">{libro.price} €</Badge>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default AllTheBooks;
