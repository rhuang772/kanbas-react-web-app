import React from "react";
import { Link } from "react-router-dom";
function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
    }) {

  return (
    <div className="container-fluid">
      <h1>Dashboard</h1><hr />
      <h5>Course</h5>
      <button className="btn btn-success" onClick={addNewCourse} >
        Add
      </button>&nbsp;
      <button className="btn btn-primary" onClick={updateCourse} >
        Update
      </button>
      <input value={course.name} className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} /><br />
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {courses.map((course) => (
          <div key={course._id} className="col-md-3" style={{ width: 300 }}>
            <div className="card">
              <img src={`/images/${course.image}`} className="card-img-top"
                style={{ height: 150 }} />
              <div className="card-body">
                <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  {course.name}
                </Link>
                <p className="card-text">{course.number}</p>
                <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                  Go </Link><br /><br />
                <button className="btn btn-success" onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}>
                  Edit
                </button>&nbsp;
                <button className="btn btn-danger" onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;