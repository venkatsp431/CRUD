import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/base";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddStudent({ students, setStudents }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [qualification, setQualification] = useState("");
  const [gender, setGender] = useState("");

  const addstudent = async function () {
    const newStudent = {
      name,
      batch,
      qualification,
      gender,
    };
    const response = await fetch(
      "https://6450da28a32219691153675b.mockapi.io/users/",
      {
        method: "POST",
        body: JSON.stringify(newStudent),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const newData = await response.json();
    setStudents([...students, newData]);
    setName("");
    setBatch("");
    setQualification("");
    setGender("");
    history.push("/students");
  };

  return (
    <Base
      title={"Add Students"}
      description={"Enter all details to add a student"}
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
        <Button variant="primary" type="submit" onClick={() => addstudent()}>
          Add
        </Button>
      </div>
    </Base>
  );
}
export default AddStudent;
