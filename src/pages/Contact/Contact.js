import github from "../../components/Assets/github.svg";
import Project from "../../components/Layout/Project";
import FlexMe from "../../components/UI/FlexMe";
import linkedin from "../../components/Assets/linkedin.svg";

const Contact = (props) => {
  return (
    <FlexMe toggle={props.toggle}>
      <Project
        logo={github}
        title={"GitHub"}
        button_name="Take me there!"
        linkSocial="https://github.com/bkhadka2"
        toggle={props.toggle}
      />
      <Project
        logo={linkedin}
        title={"LinkedIn"}
        button_name="Take me there!"
        linkSocial="https://www.linkedin.com/in/bishal-khadka/"
      />
    </FlexMe>
  );
};

export default Contact;
