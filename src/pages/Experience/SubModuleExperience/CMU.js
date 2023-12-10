import classes from "./Work.module.css";

const CMU = (props) => {
  return (
    <>
      <h1
        className={`${classes.header} ${
          props.toggle ? classes.header__light : ""
        }`}
      >
        CMU
      </h1>
      <div className={classes.bulletPoints}>
        <ul>
          <li>
            Conducted research and authored two papers on malicious URLs and TOR
            Traffic, presenting models with an exceptional accuracy exceeding
            98%
          </li>
          <li>
            Served as a teaching assistant for various courses, collaborating
            with multiple professors to support classes such as Object-Oriented
            Programming, Data Structures and Algorithms, and Python
          </li>
          <li>
            Elevated the Cyber Security Club as its president, successfully
            growing its membership from 6 to approximately 15 members
          </li>
        </ul>
      </div>
    </>
  );
};

export default CMU;
