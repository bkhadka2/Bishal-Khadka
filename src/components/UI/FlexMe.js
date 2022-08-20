import classes from "./FlexMe.module.css";

const FlexMe = (props) => {
  return <div className={classes.container__main}>{props.children}</div>;
};

export default FlexMe;
