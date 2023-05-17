import classes from "./Work.module.css";

const ProStar = (props) => {
  return (
    <>
      <h1
        className={`${classes.header} ${
          props.toggle ? classes.header__light : ""
        }`}
      >
        ProStar
      </h1>

      <div className={classes.bulletPoints}>
        <ul>
          <li>
            Designed and architected automation testing suite from scratch.
            Transferred all of the test cases written in Jest-Puppeteer to
            Behave-Selenium for browser compatibility and better code management
            and maintainability
          </li>
          <li>
            Developed an Employee On-boarding web application which includes
            training videos and quizes for faster and easier on-boarding process
          </li>
          <li>Performed more than 100 regression tests</li>
          <li>
            Worked on bug fixes on pointman.cloud software and practiced agile software development
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProStar;
