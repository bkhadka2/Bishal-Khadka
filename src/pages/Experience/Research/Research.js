import classes from "./Research.module.css";
import Project from "../../../components/Layout/Project";
import tor from "../../../components/Assets/tor.svg";
import virus from "../../../components/Assets/virus.svg";

const Research = () => {
  return (
    <>
      <div className={classes.heading}>Research Papers</div>
      <div className={classes.research}>
        <Project
          logo={virus}
          title="Detecting Malicious URLs"
          description="Research Towards Detecting and Classifying Malicious URLs Using Deep Learning"
          linkCode="https://github.com/Colorado-Mesa-University-Cybersecurity/DeepLearningMaliciousURLs"
          linkDemo="http://isyou.info/jowua/papers/jowua-v11n4-3.pdf"
        />
        <Project
          logo={tor}
          title="Detecting TOR Traffic"
          description="Research on Application of Deep Learning on the Characterization of Tor Traffic using Time based Features"
          linkCode="https://github.com/bkhadka2/DeepLearning-TorTraffic"
          linkDemo="http://isyou.info/jisis/vol11/no1/jisis-2021-vol11-no1-03.pdf"
        />
      </div>
    </>
  );
};

export default Research;
