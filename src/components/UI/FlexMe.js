import classes from "./FlexMe.module.css";

const FlexMe = (props) => {
  return (
    <div
      className={`${classes.container__main} ${
        props.toggle ? classes["container__main--light"] : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default FlexMe;
