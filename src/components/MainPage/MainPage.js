import classes from "./MainPage.module.css";
import { useEffect, useState } from "react";
import Navigation from "../Nav/Navigation";
import { Route, Switch, Redirect } from "react-router-dom";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/HomePage/HomePage";
import Projects from "../../pages/Projects/Projects";
import Skills from "../../pages/Skills/Skills";
import Experience from "../../pages/Experience/Experience";

const MainPage = () => {
  const [toggle, setToggle] = useState(false);

  const ToggleHandler = (prev) => {
    useEffect(() => {
      setToggle(prev);
    }, [prev]);
  };
  console.log(toggle);

  return (
    <>
      <div className={classes.container__main}>
        <Navigation toggle={ToggleHandler} />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/contact">
            <Contact toggle={toggle}/>
          </Route>
          <Route path="/home">
            <Home toggle={toggle}/>
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

export default MainPage;
