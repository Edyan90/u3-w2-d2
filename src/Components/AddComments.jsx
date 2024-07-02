import { Component } from "react";
import { Form, Button } from "react-bootstrap";
class AddComments extends Component {
  state = {
    formValue: {
      email: "",
      comment: "",
      rate: "",
      elementId: this.props.asin,
    },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.formValue),

      headers: {
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNTVhYTNhMzhjYjAwMTVmNjNjZWIiLCJpYXQiOjE3MTk0ODk5NjMsImV4cCI6MTcyMDY5OTU2M30.16nMX_VbXAW_QQwS3bouQXrfEJ4NsCBR0NpuVZuH4TA",
      },
    })
      .then((resp) => {
        if (resp.ok) {
        } else {
          throw new Error("errore nel reperimento dati");
        }
      })
      .then((resp) => {
        this.props.ricarica();
        alert("Feedback inviato!");
      })
      .catch((err) => alert(err));
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={this.state.formValue.email}
            onChange={(e) => {
              this.setState({ formValue: { ...this.state.formValue, email: e.target.value } });
            }}
          />
          <Form.Label>Comment:</Form.Label>
          <Form.Control
            size="md"
            type="text"
            placeholder="Inserisci qui il tuo commento"
            request
            value={this.state.formValue.comment}
            onChange={(e) => {
              this.setState({ formValue: { ...this.state.formValue, comment: e.target.value } });
            }}
          />
        </Form.Group>
        <Form.Label>Dai un voto!</Form.Label>
        <Form.Select
          className="mb-3"
          aria-label="Default select example"
          value={this.state.formValue.rate}
          onChange={(e) => {
            this.setState({ formValue: { ...this.state.formValue, rate: e.target.value } });
          }}
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </Form.Select>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
export default AddComments;
