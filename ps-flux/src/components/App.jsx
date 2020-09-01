import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/about") {
      return <AboutPage></AboutPage>;
    } else {
      return <HomePage></HomePage>;
    }
  }
  return (
    <div className="container-fluid">
      <Header></Header>
      {getPage()}
    </div>
  );
}
export default App;
