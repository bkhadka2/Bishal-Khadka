import { useState } from "react";
import classes from "./App.module.css";
import MainPage from "./components/MainPage/MainPage";

const App = () => {
  const [mode, setMode] = useState();

  const modeHandler = (data) => {
    setMode(data);
  };

  return (
    <div className={`${mode ? classes.mainContainer : ""}`}>
      <MainPage mode={modeHandler} />
    </div>
  );
};

export default App;
