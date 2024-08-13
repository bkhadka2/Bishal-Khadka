import classes from "./Skills.module.css";
import node from "../../components/Assets/node.svg";
import react from "../../components/Assets/react.svg";
import css3 from "../../components/Assets/css3.svg";
import html from "../../components/Assets/html.svg";
import js from "../../components/Assets/javascript.svg";
import python from "../../components/Assets/python.svg";
import flask from "../../components/Assets/flask.svg";
import aws from "../../components/Assets/aws.svg";
import cplusplus from "../../components/Assets/cplusplus.svg";
import ts from "../../components/Assets/typescript-svgrepo-com.svg"

const Skills = (props) => {
  return (
    <div
      className={`${classes.container__main} ${
        props.toggle ? classes["container__main--light"] : ""
      }`}
    >
      <div className={classes.container}>
        <img src={js} alt="javascript" className={classes.logo} />
      </div>
      <div className={classes.container}>
        <img src={ts} alt="typescript" className={classes.logo} />
      </div>
      <div className={classes.container}>
        <img src={react} alt="react" className={classes.logo} />
      </div>
      <div className={classes.container}>
        <img src={node} alt="node" className={classes.logo} />
      </div>
      <div className={classes.container}>
        <img src={css3} alt="css" className={classes.logo} />
      </div>
      <div className={classes.container}>
        <img src={html} alt="html" className={classes.logo} />
      </div>
      <div className={classes.container}>
        <img src={python} alt="python" className={classes.logo} />
      </div>
      <div className={classes.container}>
        <img src={flask} alt="flask python" className={classes.logo} />
      </div>
      <div className={classes.container}>
        <img src={cplusplus} alt="c++" className={classes.logo} />
      </div>
      <div className={classes.container}>
        <img src={aws} alt="aws" className={classes.logo} />
      </div>
    </div>
  );
};

export default Skills;
