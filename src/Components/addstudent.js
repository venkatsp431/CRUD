import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/base";

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
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Batch"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Qualification"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
        />
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <button onClick={() => addstudent()}>Add</button>
      </div>
    </Base>
  );
}
export default AddStudent;
