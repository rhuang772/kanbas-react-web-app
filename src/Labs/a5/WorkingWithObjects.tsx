import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
    const fetchAssignment = async () => {
      const response = await axios.get(`${ASSIGNMENT_URL}`);
      setAssignment(response.data);
    };
    const updateTitle = async () => {
      const response = await axios
        .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
      setAssignment(response.data);
    };
    useEffect(() => {
      fetchAssignment();
    }, []);
  

    const [module, setModule] = useState({
        id: 1, name: "What is Node?",
        description: "The ins and outs of Node and how it works",
        course: "CS4550",
    });
    const MODULE_URL = "http://localhost:4000/a5/module";
  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button><br/>

      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Assignment Title
      </a>&nbsp;
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/><br/>

      <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update Assignment Score
      </a>&nbsp;
      <input type="number" 
        onChange={(e) => setAssignment({ ...assignment,
            score: parseInt(e.target.value) })}
        value={assignment.score}/><br/>

      <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Mark Assignment as Complete
      </a>&nbsp;
      <input type="checkbox" 
        onChange={(e) => setAssignment({ ...assignment,
            completed: e.target.checked})}
        checked={assignment.completed}/><br/>

      <a href={`${MODULE_URL}/name/${module.name}`}>
        Update Module Name
      </a>&nbsp;
      <input type="text"
        onChange={(e) => setModule({...module, 
             name: e.target.value})}
        value={module.name}/><br/>

      <h4>Retrieving Objects</h4>
      <a href="http://localhost:4000/a5/assignment">
        Get Assignment
      </a><br/>
      <a href="http://localhost:4000/a5/module">
        Get Module
      </a><br/>
      <h4>Retrieving Properties</h4>
      <a href="http://localhost:4000/a5/assignment/title">
        Get Title
      </a><br/>
      <a href="http://localhost:4000/a5/module/name">
        Get Module Name
      </a><br/>
    </div>
  );
}
export default WorkingWithObjects;