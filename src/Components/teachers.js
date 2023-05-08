import React from "react";
import Base from "../Base/base";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(
        `https://6450da28a32219691153675b.mockapi.io/students`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      if (result) setTeachers(result);
    };
    fetchFunc();
  }, []);
  return (
    <Base title={"Welcome Teachers"} description={"The list of all teachers"}>
      <div className="card-container">
        <Container>
          <Row>
            {teachers.map((teacher, idx) => (
              <Col md={3}>
                <Card style={{ width: "18rem" }} key={idx}>
                  <Card.Body>
                    <Card.Title>{teacher.Teacher}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {teacher.designation}
                    </Card.Subtitle>
                    <Card.Text>{teacher.majorsub}</Card.Text>
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
