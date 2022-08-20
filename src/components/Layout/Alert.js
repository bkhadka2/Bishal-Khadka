import classes from "./Alert.module.css";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState } from "react";

const SuccessAlert = (props) => {
  const [close, setClose] = useState(false);

  const closeHandler = () => {
    setClose((prev) => !prev);
  };

  return (
    <div
      className={`${
        !close ? classes.container__main : classes["container__main--nodisplay"]
      } ${props.success ? classes["container__main--success"] : ""} ${
        props.error ? classes["container__main--error"] : ""
      }`}
    >
      <div className={classes.container__iconMessage}>
        <CheckCircleOutlineIcon className={classes.check} />
        <div className={classes.alert}>{props.alertMessage}</div>
      </div>

      <CloseIcon className={classes.close} onClick={closeHandler} />
    </div>
  );
};

export default SuccessAlert;
