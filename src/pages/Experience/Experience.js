import classes from "./Experience.module.css";
import CMU from "./SubModuleExperience/CMU";
import ProStar from "./SubModuleExperience/ProStar";
import Research from "./Research/Research";
import { useState } from "react";

const Experience = () => {
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
    <div className={classes.exp}>
      <div className={classes.heading}>Experiences</div>
      <div className={classes.expi}>
        <div className={classes.work}>
          <div className={classes.button}>
            <button
              className={`${classes.workButton} ${
                prostar ? classes.clicked : ""
              }`}
              onClick={prostarHandler}
            >
              ProStar
            </button>
            QA and Test Engineer
          </div>
          <hr />
          <div className={classes.button}>
          <button
            className={`${classes.workButton} ${cmu ? classes.clicked : ""}`}
            onClick={cmuHandler}
          >
            CMU
          </button>
          Research Fellow / <br />
          Teaching Assistant
          </div>
        </div>
        <div className={classes.desc}>
          {prostar && <ProStar />}
          {cmu && <CMU />}
        </div>
      </div>
      <hr />
      <Research />
    </div>
  );
};

export default Experience;
