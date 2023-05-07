import React, { useState } from "react";
import Base from "../Base/base";
import { useHistory } from "react-router-dom";

function Students({ students, setStudents }) {
  const [editIdx, setEditIdx] = useState();
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
      title={"Students List"}
      description={"Here, you can view,add or delete students data"}
    >
      <button onClick={() => history.push("/add")}>Add Student</button>
      <div className="card-container">
        {students.map((stud, idx) => (
          <div className="card" key={idx}>
            <div className="content">
              <h4>{stud.name}</h4>
              <h5>{stud.batch}</h5>
              <p>{stud.qualification}</p>
              <p>{stud.gender}</p>
            </div>
            <div className="controls">
              <button onClick={() => history.push(`/edit/${idx}`)}>Edit</button>{" "}
              <button onClick={() => deleteStudent(stud.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </Base>
  );
}

export default Students;
