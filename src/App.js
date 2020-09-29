import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import About from "./components/About";
import SingleProject from "./components/SingleProject";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <section className="main">
        <Router>
          <Welcome path={process.env.PUBLIC_URL + "/"} />
          <About path={process.env.PUBLIC_URL + "/about"} />
          <SingleProject
            path={process.env.PUBLIC_URL + "/project/:projectName"}
          />
          <Contact path={process.env.PUBLIC_URL + "/contact"} />
        </Router>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;
