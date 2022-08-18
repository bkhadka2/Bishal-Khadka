import { useEffect, useState, useCallback } from "react";
import scientist from "../../components/Assets/scientist.svg";
import classes from "./HomePage.module.css";
let index = 0;

const Home = () => {
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
          <h1 className={classes.intro}>{intro}</h1>
        </div>
        <div className={classes.info}>
          <div>
            <img src={scientist} alt="" />
          </div>
          <div>
            I am <span>Bishal Khadka</span>. Ambitious and hard working software
            developer who loves to learn and try state-of-the-art technologies.
            <hr /> Make things and break things to gain deeper understanding of
            a subject is my motto. <hr />I love to play FIFA and hangout with my
            girlfriend and other family members in my spare time.
          </div>
        </div>
        <div>
          <a
            href="https://github.com/bkhadka2"
            target="_blank"
            rel="noreferrer"
          >
            <button className={classes.button}>Download Resume</button>
          </a>
        </div>

        <div></div>
      </div>
    </>
  );
};
export default Home;
