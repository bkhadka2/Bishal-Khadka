import classes from "./Navigation.module.css";
import CottageIcon from "@mui/icons-material/Cottage";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
// import ToggleOffIcon from '@mui/icons-material/ToggleOff';
// import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [enterHome, setEnterHome] = useState(false);
  const [enterAboutme, setEnterAboutme] = useState(false);
  const [enterProject, setEnterProject] = useState(false);
  const [enterSkill, setEnterSkill] = useState(false);
  const [enterExperience, setEnterExperience] = useState(false);

  const homeEnterHandler = () => {
    setEnterHome(true);
  };
  const homeLeaveHandler = () => {
    setEnterHome(false);
  };
  const aboutMeEnterHandler = () => {
    setEnterAboutme(true);
  };
  const aboutMeLeaveHandler = () => {
    setEnterAboutme(false);
  };
  const projectEnterHandler = () => {
    setEnterProject(true);
  };
  const projectLeaveHandler = () => {
    setEnterProject(false);
  };
  const skillEnterHandler = () => {
    setEnterSkill(true);
  };
  const skillLeaveHandler = () => {
    setEnterSkill(false);
  };
  const experienceEnterHandler = () => {
    setEnterExperience(true);
  };
  const experienceLeaveHandler = () => {
    setEnterExperience(false);
  };
  return (
    <div className={classes.container__navigation}>
      <div
        className={classes["container__navigation--element"]}
        onMouseEnter={homeEnterHandler}
        onMouseLeave={homeLeaveHandler}
      >
        <NavLink activeClassName={classes.active} to="/home">
          <CottageIcon className={classes.navigation__icon} />
          <span
            className={`${
              enterHome ? classes.icon__hovered : classes.icon__noHover
            }`}
          >
            Home
          </span>
        </NavLink>
      </div>
      <div
        className={classes["container__navigation--element"]}
        onMouseEnter={aboutMeEnterHandler}
        onMouseLeave={aboutMeLeaveHandler}
      >
        <NavLink activeClassName={classes.active} to="/contact">
          <InfoRoundedIcon className={classes.navigation__icon} />
          <span
            className={`${
              enterAboutme ? classes.icon__hovered : classes.icon__noHover
            }`}
          >
            Contact
          </span>
        </NavLink>
      </div>
      <div
        className={classes["container__navigation--element"]}
        onMouseEnter={projectEnterHandler}
        onMouseLeave={projectLeaveHandler}
      >
        <NavLink activeClassName={classes.active} to="/projects">
          <AccountTreeRoundedIcon className={classes.navigation__icon} />
          <span
            className={`${
              enterProject ? classes.icon__hovered : classes.icon__noHover
            }`}
          >
            Projects
          </span>
        </NavLink>
      </div>
      <div
        className={classes["container__navigation--element"]}
        onMouseEnter={skillEnterHandler}
        onMouseLeave={skillLeaveHandler}
      >
        <NavLink activeClassName={classes.active} to="/skills">
          <PsychologyRoundedIcon className={classes.navigation__icon} />
          <span
            className={`${
              enterSkill ? classes.icon__hovered : classes.icon__noHover
            }`}
          >
            Skills
          </span>
        </NavLink>
      </div>
      <div
        className={classes["container__navigation--element"]}
        onMouseEnter={experienceEnterHandler}
        onMouseLeave={experienceLeaveHandler}
      >
        <NavLink activeClassName={classes.active} to="/experience">
          <DownhillSkiingIcon className={classes.navigation__icon} />
          <span
            className={`${
              enterExperience ? classes.icon__hovered : classes.icon__noHover
            }`}
          >
            Experience
          </span>
        </NavLink>
      </div>
      <div className={classes["container__navigation--element"]}>
        <button>
          <ToggleOnIcon className={classes.navigation__icon} />
          <span className={`${classes.icon__noHover}`}>Experience</span>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
