import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Base from "../Base/base";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function UpdateFunction({ students, setStudents }) {
  const { id } = useParams();
  const history = useHistory();
  const editStudent = students[id];
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [qualification, setQualification] = useState("");
  const [gender, setGender] = useState("");
  useEffect(() => {
    setName(editStudent.name);
    setBatch(editStudent.batch);
    setQualification(editStudent.qualification);
    setGender(editStudent.gender);
  }, [editStudent]);

  async function updateStudent() {
    const updatedObject = {
      name,
      gender,
      qualification,
      batch,
    };
    const response = await fetch(
      `https://6450da28a32219691153675b.mockapi.io/users/${editStudent.id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.json();
    if (data) {
      students[id] = updatedObject;
      setStudents([...students]);
      history.push("/students");
    }
  }

  return (
    <Base
      title={"Edit Student"}
      description={"Fill Correct details to edit a student"}
    >
      <div className="input-details">
        <Form>
          <Form.Group className="my-3">
            <Form.Control
              type="text"
              placeholder="Name"
              className="mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control
              type="text"
              placeholder="Batch"
              className="mb-4"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
            />
            <Form.Control
              type="text"
              placeholder="Qualification"
              className="mb-4"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
            <Form.Control
              type="text"
              placeholder="Gender"
              className="mb-4"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit" onClick={updateStudent}>
          Add
        </Button>
      </div>
    </Base>
  );
}
