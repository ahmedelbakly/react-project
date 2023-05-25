import React, { useState } from "react";
import "./window.css";

import ButtonGroup from "./buttons/ButtonGroup";

const Window = () => {
  const [Open, setOpen] = useState(true);
  const [trans, setTrans] = useState(1);

  
  console.log(trans);

  return (
    <div className="container">
      <div className="button-container">
        <ButtonGroup
          open={Open}
          setOpen={setOpen}
          trans={trans}
          setTrans={setTrans}
        />
      </div>

      <div className="window-container">
        <div className="parent">
          <img
            src="https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg"
            alt=""
          />
          <div
            className={`child1 child ${!Open ? "open1" : ""}`}
            style={{ opacity: trans }}
          ></div>
          <div
            className={`child2 child ${!Open ? "open2" : ""} `}
            style={{ opacity: trans }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Window;
