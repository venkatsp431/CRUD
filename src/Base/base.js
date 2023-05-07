import React from "react";
import { useHistory } from "react-router-dom";

function Base({ title, description, children }) {
  const history = useHistory();
  return (
    <div className="main-component base-comp">
      <header>
        <button onClick={() => history.push("/")}>Dashboard</button>

        <h1>{title}</h1>
      </header>
      <main className="main-segment">
        <h2>{description}</h2>

        <div>{children}</div>
      </main>
    </div>
  );
}

export default Base;
