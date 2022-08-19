import classes from "./Project.module.css";

const Project = (props) => {
  return (
    <div
      className={`${classes.container__card} ${
        props.toggle ? classes["container__card--light"] : ""
      }`}
    >
      <div className={classes.container__image}>
        <img src={props.logo} alt="company logo" className={classes.logo} />
      </div>
      <div
        className={` ${classes["container__card--title"]} ${
          props.toggle ? classes["container__card--title--light"] : ""
        }`}
      >
        {props.title}
      </div>
      <p className={classes["container__card--desc"]}>{props.description}</p>
      {props.description && props.linkDemo && (
        <div className={classes.container__button}>
          <a
            href={props.linkCode}
            target="_blank"
            className={`${classes["container__button--green"]} ${classes.button__common}`}
            rel="noreferrer"
          >
            <button>Code</button>
          </a>

          <a
            href={props.linkDemo}
            target="_blank"
            className={`${classes["container__button--orange"]} ${classes.button__common}`}
            rel="noreferrer"
          >
            <button>Demo</button>
          </a>
        </div>
      )}
      {!props.description && (
        <div className={classes.container__button2}>
          <a
            href={props.linkSocial}
            target="_blank"
            className={`${classes["container__button--orange"]} ${classes.button__common2}`}
            rel="noreferrer"
          >
            <button>Take me there!</button>
          </a>
        </div>
      )}
      {props.description && !props.linkDemo && (
        <div className={classes.container__button2}>
          <a
            href={props.linkCode}
            target="_blank"
            className={`${classes["container__button--green"]} ${classes.button__common2}`}
            rel="noreferrer"
          >
            <button>Code!</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Project;
