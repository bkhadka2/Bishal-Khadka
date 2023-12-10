import Project from "../../components/Layout/Project";
import weather from "../../components/Assets/weather.svg";
import Kanban from "../../components/Assets/kanban.svg";
import ml from "../../components/Assets/ml.svg";
import education from "../../components/Assets/education.svg";
import ai from "../../components/Assets/AI.svg";
import editor from "../../components/Assets/editor.svg";
import object from "../../components/Assets/object.svg";
import ui from "../../components/Assets/ui.svg";

import FlexMe from "../../components/UI/FlexMe";

const Projects = (props) => {
  return (
    <FlexMe>
      <Project
        logo={ml}
        title="WriteIn Machine Learning"
        description="This application allows users to draw an uppercase character in a canvas and converts the drawn character into digital text. (Python, Machine Learning, Deep Learning, HTML, Jupyter Notebook, CSS)"
        linkCode="https://github.com/bkhadka2/WriteIn-Machine-Learning"
        toggle={props.toggle}
      />
      <Project
        logo={education}
        title="Education Funding App"
        description="This is a simple website to help children in their education by finding sponsors/donors in Dolpo, Nepal. Was able to find almost 10 sponsors. (JavaScript, NodeJs, Express, handlebars, mongodb)"
        linkCode="https://github.com/bkhadka2/Education_Funding_App"
        toggle={props.toggle}
      />
      <Project
        logo={weather}
        title="Weather App"
        description="This application uses Fetch API and promises to fetch the weather data of a particular city. (JS, React, HTML, CSS)"
        linkCode="https://github.com/bkhadka2/FetchAPI-Weather"
        toggle={props.toggle}
      />
      <Project
        logo={Kanban}
        title="Kanban Board"
        description="This application is a simple clone of kanban board for personal use. (Python, Flask, HTML, CSS, SQLAlchemy)"
        linkCode="https://github.com/bkhadka2/Bishal-Kanban"
        toggle={props.toggle}
      />

      <Project
        logo={ai}
        title="Artificial Intelligence Projects"
        description="Various Projects like self driving car, goat agent in baghchal game were made. (Python, Tensorflow)"
        linkCode="https://github.com/bkhadka2/Artificial-Intelligence-Projects"
        toggle={props.toggle}
      />
      <Project
        logo={ui}
        title="User Interfaces"
        description="Making User Interfaces using react and other third party libraries. (React, JS, HTML, CSS)"
        linkCode="https://github.com/bkhadka2/UIs"
        toggle={props.toggle}
      />
      <Project
        logo={object}
        title="Object Oriented Programming"
        description="Projects completed with the core concept of OOP like Inheritance, Polymorphism, Abstraction, and Encapsulation. (C++, Java, JS)"
        linkCode="https://github.com/bkhadka2/OOP"
        toggle={props.toggle}
      />
      <Project
        logo={editor}
        title="Zyco Text Editor"
        description="Simple clone of the text editor like notepad++ with terminal built in and various binding functions. (Python, TKinter)"
        linkCode="https://github.com/bkhadka2/Zyco-Text-Editor/tree/master/Zyco"
        toggle={props.toggle}
      />
    </FlexMe>
  );
};

export default Projects;
