import classes from "./MainPage.module.css";
import { useState } from "react";
import Navigation from "../Nav/Navigation";
import { Route, Switch, Redirect } from "react-router-dom";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/HomePage/HomePage";
import Projects from "../../pages/Projects/Projects";
import Skills from "../../pages/Skills/Skills";
import Experience from "../../pages/Experience/Experience";

const About = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick((button) => !button);
  };
  console.log(click);

  return (
    <>
      <div className={classes.container__main}>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default About;
