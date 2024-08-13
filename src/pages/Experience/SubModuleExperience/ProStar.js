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
            Authored over 1500 comprehensive test cases to rigorously assess app
            robustness and performance, resulting in a 50% increase in
            application availability and reliability
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
