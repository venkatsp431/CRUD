import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Base({ title, description, children }) {
  const history = useHistory();
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link onClick={() => history.push("/")}>Dashboard</Nav.Link>
            <Nav.Link onClick={() => history.push("/students")}>
              View Students
            </Nav.Link>
            <Nav.Link onClick={() => history.push("/teachers")}>
              View Teachers
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-component base-comp">
        <header>
          <h1>{title}</h1>
        </header>
        <main className="main-segment">
          <h2>{description}</h2>

          <div>{children}</div>
        </main>
      </div>
    </div>
  );
}

export default Base;
