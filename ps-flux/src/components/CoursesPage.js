import React from "react";
import { getCourses } from "../api/courseApi";

const renderCoursesRows = (course) => {
  return (
    <tr key={course.id}>
      <td>{course.title}</td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
    </tr>
  );
};
class CoursesPage extends React.Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    getCourses().then((courses) => {
      this.setState({ courses: courses });
    });
  }
  render() {
    return (
      <>
        <h2>Courses</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Authours ID</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>{this.state.courses.map(renderCoursesRows)}</tbody>
        </table>
      </>
    );
  }
}

export default CoursesPage;
