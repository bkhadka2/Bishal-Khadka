import classes from "./Work.module.css";

const CMU = () => {
  return (
    <>
      <h1 className={classes.header}>CMU</h1>
      <div className={classes.bulletPoints}>
        <ul>
          <li>
            Did research and published two papers on malicious URLs and TOR
            Traffic in which models have accuracy of more than 98%
          </li>
          <li>
            Assisted multiple professors with their classes as a teaching
            assistant including classes like OOP, Data Structure and Algorithms,
            Python
          </li>
          <li>
            Became president of Cyber Security Club and was able to increase
            members of the club from 6 to around 15
          </li>
        </ul>
      </div>
    </>
  );
};

export default CMU;
