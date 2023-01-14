import classes from "./Experience.module.css";
import CMU from "./SubModuleExperience/CMU";
import ProStar from "./SubModuleExperience/ProStar";
import Research from "./Research/Research";
import { useState } from "react";

const Experience = (props) => {
  const [cmu, setCmu] = useState(false);
  const [prostar, setProstar] = useState(true);

  const cmuHandler = () => {
    setProstar(false);
    setCmu(true);
  };

  const prostarHandler = () => {
    setCmu(false);
    setProstar(true);
  };

  return (
    <div
      className={`${classes.container__main} ${
        props.toggle ? classes["container__main--light"] : ""
      }`}
    >
      <div className={classes["container__main--heading"]}>Experiences</div>
      <div className={classes["container__main--experiences"]}>
        <div
          className={`${classes["container__main--experiences--work"]} ${
            props.toggle
              ? classes["container__main--experiences--work--light"]
              : ""
          }`}
        >
          <div className={classes.button}>
            <button
              className={`${classes.button__work} ${
                prostar ? classes.clicked : ""
              } ${props.toggle ? classes["button__work--light"] : ""}`}
              onClick={prostarHandler}
            >
              ProStar
            </button>
            Software Developer / <br /> Automation Test Lead
          </div>
          <hr />
          <div className={classes.button}>
            <button
              className={`${classes.button__work} ${
                cmu ? classes.clicked : ""
              } ${props.toggle ? classes["button__work--light"] : ""}`}
              onClick={cmuHandler}
            >
              CMU
            </button>
            Research / <br />
            Teaching Assistant
          </div>
        </div>
        <div className={classes.desc}>
          {prostar && <ProStar toggle={props.toggle} />}
          {cmu && <CMU toggle={props.toggle} />}
        </div>
      </div>
      <hr />
      <Research toggle={props.toggle} />
    </div>
  );
};

export default Experience;
