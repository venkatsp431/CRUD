import React from "react";
import Base from "../Base/base";
import { useHistory } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

export function Dashboard() {
  const history = useHistory();
  return (
    <Base
      title={"Welcome to Student Dasboard"}
      description={"Here, you can view students data"}
    >
      <div>
        <button onClick={() => history.push("/students")}>View Students</button>
        <button onClick={() => history.push("/teachers")}>View Teachers</button>
      </div>
    </Base>
  );
}
