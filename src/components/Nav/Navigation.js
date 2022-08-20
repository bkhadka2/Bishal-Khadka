import classes from "./Navigation.module.css";
import CottageIcon from "@mui/icons-material/Cottage";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Navigation = (props) => {
  const [enterHome, setEnterHome] = useState(false);
  const [enterAboutme, setEnterAboutme] = useState(false);
  const [enterProject, setEnterProject] = useState(false);
  const [enterSkill, setEnterSkill] = useState(false);
  const [enterExperience, setEnterExperience] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    props.toggle(toggle);
  });
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
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div
      className={`${classes.container__navigation} ${
        toggle ? classes["container__navigation--light"] : ""
      }`}
    >
      <div
        className={classes["container__navigation--element"]}
        onMouseEnter={homeEnterHandler}
        onMouseLeave={homeLeaveHandler}
      >
        <NavLink activeClassName={classes.active} to="/Bishal-Khadka/home">
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
        <NavLink activeClassName={classes.active} to="/Bishal-Khadka/contacts">
          <InfoRoundedIcon className={classes.navigation__icon} />
          <span
            className={`${
              enterAboutme ? classes.icon__hovered : classes.icon__noHover
            }`}
          >
            Contacts
          </span>
        </NavLink>
      </div>
      <div
        className={classes["container__navigation--element"]}
        onMouseEnter={projectEnterHandler}
        onMouseLeave={projectLeaveHandler}
      >
        <NavLink activeClassName={classes.active} to="/Bishal-Khadka/projects">
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
        <NavLink activeClassName={classes.active} to="/Bishal-Khadka/skills">
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
        <NavLink activeClassName={classes.active} to="/Bishal-Khadka/experiences">
          <DownhillSkiingIcon className={classes.navigation__icon} />
          <span
            className={`${
              enterExperience ? classes.icon__hovered : classes.icon__noHover
            }`}
          >
            Experiences
          </span>
        </NavLink>
      </div>
      <div
        className={classes["container__navigation--element"]}
        onClick={toggleHandler}
      >
        {toggle && (
          <button className={classes.button__toggleOn}>
            <ToggleOnIcon className={classes.navigation__icon} />
          </button>
        )}
        {!toggle && (
          <button className={classes.button__toggleOff}>
            <ToggleOffIcon className={classes.navigation__icon} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
