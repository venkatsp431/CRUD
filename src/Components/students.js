import React from "react";
import Base from "../Base/base";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Students({ students, setStudents }) {
  const history = useHistory();
  const deleteStudent = async (studId) => {
    const response = await fetch(
      `https://6450da28a32219691153675b.mockapi.io/users/${studId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (data) {
      console.log(students, studId);
      const remainingStudents = students.filter((stud) => stud.id !== studId);
      setStudents(remainingStudents);
    }
  };

  return (
    <Base
      title={"Students Lit"}
      description={"Here, you can view,add or delete students data"}
    >
      <button onClick={() => history.push("/add")}>Add Student</button>

      <div className="card-container">
        <Container>
          <Row>
            {students.map((stud, idx) => (
              <Col md={3}>
                <Card style={{ width: "18rem" }} key={idx}>
                  <Card.Body>
                    <Card.Title>{stud.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {stud.batch}
                    </Card.Subtitle>
                    <Card.Text>{stud.qualification}</Card.Text>
                    <Card.Text>{stud.gender}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => history.push(`/edit/${idx}`)}
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      variant="primary"
                      onClick={() => deleteStudent(stud.id)}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Base>
  );
}

export default Students;
