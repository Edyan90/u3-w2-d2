import { Component } from "react";
import { Container, Row, Form, Col, Alert } from "react-bootstrap";
import SingleBook from "./SingleBook";
import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    categoria: fantasy,
    formValue: {
      searchForm: "",
    },
    asin: "",
  };

  setAsin = (asin) => {
    this.setState({ asin }); //cambio lo stato di Asin (lo si userà sull'onClick di SingleBook)
  };
  handleFormSubmit = (event) => {
    event.preventDefault(); // Previene il comportamento predefinito del submit
  };
  render() {
    const { categoria, formValue } = this.state; //destrutturazione degli oggetti così da non scrivere tutte quelle righe lunghe solo per prendere un valore
    const { searchForm } = formValue;
    const filteredBooks = searchForm //Se questa è vera ovvero contiene un valore allora creami i libri filtrati altrimenti la categoria selezionata
      ? categoria.filter((libro) => libro.title.toLowerCase().includes(searchForm.toLowerCase()))
      : categoria;
    return (
      <Container fluid className="mt-5">
        <div>
          <h3>Scegli la tua categoria preferita:</h3>
        </div>
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
        <div>
          <h6>cerca il titolo nella categoria scelta:</h6>
          <Form inline className="mb-5">
            <Row>
              <Col xs="3">
                <Form.Control
                  onSubmit={this.handleFormSubmit}
                  type="text"
                  placeholder="Search"
                  className=""
                  value={this.state.formValue.searchForm}
                  onChange={(evento) => {
                    this.setState({
                      formValue: { ...this.state.formValue, searchForm: evento.target.value },
                    });
                  }}
                />
              </Col>
            </Row>
          </Form>
        </div>
        <Row className="justify-content-evenly">
          <Col className="col-8 d-flex flex-wrap">
            {/* Se SearchForm esiste e filteredBooks è vuoto ovvero non ha trovato il libro richiesto allora mostri altrimenti mi fai il map dei libri trovati con quel parametro */}
            {searchForm && filteredBooks.length === 0 ? (
              <Alert variant="danger"> Mi dispiace, titolo non trovato</Alert>
            ) : (
              filteredBooks.map((newLibro) => (
                <SingleBook key={newLibro.asin} book={newLibro} setAsin={this.setAsin} selected={this.state.asin} /> //passo il metodo setAsin come props a SingleBook (vedi SingleBook)
              ))
            )}
          </Col>
          <Col className="col-4">
            {this.state.asin ? (
              <CommentArea asin={this.state.asin} />
            ) : (
              <Alert className="ms-4" style={{ height: "300px" }}>
                Clicca su una copertina per vedere i commenti
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BookList;
