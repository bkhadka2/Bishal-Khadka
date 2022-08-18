import classes from "./Project.module.css";

const Project = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={props.logo} alt="" className={classes.logo} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      {props.description && props.linkDemo && (
        <div className={classes.container__button}>
          <a
            href={props.linkCode}
            target="_blank"
            className={`${classes.button1} ${classes.button__common}`}
            rel="noreferrer"
          >
            <button>Code</button>
          </a>

          <a
            href={props.linkDemo}
            target="_blank"
            className={`${classes.button2} ${classes.button__common}`}
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
            className={`${classes.button2} ${classes.button__common2}`}
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
            className={`${classes.button1} ${classes.button__common2}`}
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
