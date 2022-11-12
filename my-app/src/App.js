import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "./global.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import PageLayout from "./components/common/PageLayout";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/home" />
          <Route element={"all blogs page"} path="/blogs" />
          <Route
            element={
              <>
                <div>Hello this is your blog/ profile page</div>
                <PageLayout />
              </>
            }
            path="/dashboard"
          />
          <Route element={"hello this is create page"} path="/create" />
          <Route element={"hello this is about page"} path="/about" />
          <Route
            element={"hello this is particular blog post page"}
            path="/blog/id"
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
