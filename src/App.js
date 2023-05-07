import "./App.css";
import Students from "./Components/students";
import AddStudent from "./Components/addstudent";
import UpdateFunction from "./Components/updateStudent";

import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Dashboard } from "./Components/dashboard";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchUrl = async () => {
      const response = await fetch(
        "https://6450da28a32219691153675b.mockapi.io/users/",
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data) setStudents(data);
    };
    fetchUrl();
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/students">
          <Students students={students} setStudents={setStudents} />
        </Route>
        <Route path="/add">
          <AddStudent students={students} setStudents={setStudents} />
        </Route>
        <Route path="/edit/:id">
          <UpdateFunction students={students} setStudents={setStudents} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
