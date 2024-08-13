import { useEffect, useState, useCallback } from "react";
// import scientist from "../../components/Assets/scientist.svg";
import bishal from "../../components/Assets/bishal.jpg";
import classes from "./HomePage.module.css";
let index = 0;

const Home = (props) => {
  const [intro, setIntro] = useState("Hello!");
  const text = ["Hola!", "Bonjour!", "nǐn hǎo!", "Namaste!", "konnichiwa!"];

  const shuffler = useCallback(() => {
    if (index < text.length) {
      setIntro(text[index]);
      index++;
    } else {
      index = 0;
    }
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffler, 2500);
    return () => clearInterval(intervalID);
  }, [shuffler]);

  return (
    <>
      <div className={classes.container__main}>
        <div className={classes.container__dynamictext}>
          <h1 className={classes["container__dynamictext--intro"]}>{intro}</h1>
        </div>
        <div
          className={`${classes.container__personalInformation} ${
            props.toggle ? classes["container__personalInformation--light"] : ""
          }`}
        >
          <div className={`${props.toggle ? classes["image--light"] : ""}`}>
            {/* <img src={scientist} alt="man with glass" /> */}
            <img src={bishal} alt="man with glass" height="400px" />
          </div>
          <div>
            I am <span>Bishal Khadka</span>, a dedicated and ambitious software
            developer with a passion for continuous learning and exploration of
            various technologies.
            <hr /> My commitment to gaining a profound understanding of subjects
            is reflected in my approach of both creating and deconstructing,
            allowing for a comprehensive mastery of concepts. <hr />
            During my free time, I like to watch tv series, hang out with my wife,
            and sometimes play FIFA.
          </div>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1hjdg77aCUwMdYfE7IiDinPC0E6JWv64H/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className={`${classes["button__download--resume"]} ${
                props.toggle ? classes["button__download--resume--light"] : ""
              }`}
            >
              Download Resume
            </button>
          </a>
        </div>

        <div></div>
      </div>
    </>
  );
};
export default Home;
