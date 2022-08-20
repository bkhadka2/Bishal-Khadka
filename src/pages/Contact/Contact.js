import github from "../../components/Assets/github.svg";
import Project from "../../components/Layout/Project";
import FlexMe from "../../components/UI/FlexMe";
import linkedin from "../../components/Assets/linkedin.svg";
import classes from "./Contact.module.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../../components/Layout/Alert";
import { useState } from "react";

const Contact = (props) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    console.log(form);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8vfzzxu",
        "template_9q4krx5",
        form.current,
        "nsCGEeUzWUL84RagB"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.status === 200 && result.text) {
            setError(false);
            setSuccess(true);
          } else {
            setSuccess(false);
            setError(true);
          }
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          setError(true);
        }
      );
  };
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
        toggle={props.toggle}
      />
      {success && (
        <Alert
          alertMessage={"Form Sent Successfully!"}
          success={success}
          error={error}
        />
      )}
      {error && (
        <Alert
          alertMessage={
            "Error Sending Form! Contact: bishalkhadka1600@gmail.com"
          }
          success={success}
          error={error}
        />
      )}
      <div className={classes.container__card}>
        <div className={classes.heading}>
          <div>Contact Me </div>
          <div className={classes.contact}>bishalkhadka1600@gmail.com</div>
          <div className={classes.contact}>970-799-9219</div>
        </div>
        <hr />

        <form ref={form} onSubmit={sendEmail}>
          <div className={classes.name}>
            <label>Your Name</label>
            <input type="text" name="user_name" />
          </div>
          <div className={classes.name}>
            <label>Your Email</label>
            <input type="email" name="user_email" />
          </div>
          <div className={classes.name}>
            <label>Message Me</label>
            <textarea name="message" />
          </div>
          <div className={classes.send}>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </FlexMe>
  );
};

export default Contact;
