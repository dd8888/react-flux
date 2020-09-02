import React from "react";
import propTypes from "prop-types";

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Authours ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>{props.courses.map(renderCoursesRows)}</tbody>
    </table>
  );
}

const renderCoursesRows = (course) => {
  return (
    <tr key={course.id}>
      <td>{course.title}</td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
    </tr>
  );
};

CourseList.propTypes = {
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
