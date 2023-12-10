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
            Designed and implemented an 811 New York parser to extract 811
            one-call information from emails, seamlessly integrating the data
            into the Pointman application map
          </li>
          <li>
            Conceived and crafted an automation testing suite from the ground
            up, orchestrating the seamless migration of approximately 400 test
            cases initially scripted in Jest-Puppeteer to Behave-Selenium. This
            transition was undertaken to enhance browser compatibility and
            elevate code management and maintainability
          </li>
          <li>
            Engaged actively in code reviews, fostering collaboration with team
            members to uphold code quality, address bugs, fix it, and ensure
            strict adherence to coding standards
          </li>
          <li>
            Worked with QA teams to conduct testing and resolve reported issues
            in both front-end and back-end components
          </li>
          <li>
            Engineered an Employee On-boarding web application featuring
            integrated training videos and quizzes, aimed at streamlining and
            expediting the on-boarding process for a more efficient and
            user-friendly experience
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProStar;
