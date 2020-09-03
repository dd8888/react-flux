import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Authours ID</th>
          <th>Category</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => (
          <tr key={course.id}>
            <td>
              <Link to={"/course/" + course.slug}>{course.title}</Link>
            </td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td
              className="btn btn-danger"
              onClick={() => {
                props.deleteCourse(course.id);
                toast.warn("Course deleted");
              }}
            >
              Delete
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  deleteCourse: propTypes.func.isRequired,
  courses: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      authorId: propTypes.number.isRequired,
      category: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default CourseList;
