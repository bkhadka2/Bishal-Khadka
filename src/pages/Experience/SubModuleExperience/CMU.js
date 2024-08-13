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
            Assisted in delivering lectures on core computer science
            fundamentals, leading engaging discussion sessions, and managing
            laboratory activities for multiple classes.
          </li>
          <li>
            Collaborated with professors to develop course materials, enhancing
            instructional content and ensuring seamless administrative processes
            for the computer science department.
          </li>
          <li>
            Elevated the Cyber Security Club as its president, successfully
            growing its membership from 6 to approximately 15 members
          </li>
          <li>
            Joined a cybersecurity team to build a $80,000 state-funded virtual
            machine server and private network, enabling students to practice
            cyber defense and offense through simulated attack scenarios.
          </li>
        </ul>
      </div>
    </>
  );
};

export default CMU;
