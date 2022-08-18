import classes from "./FlexMe.module.css";

const FlexMe = (props) => {
  return <div className={classes.flexb}>{props.children}</div>;
};

export default FlexMe;
