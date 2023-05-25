import React from "react";
import Button from "./Button";
import "./buttons.css";

const ButtonGroup = ({ open, setOpen, trans, setTrans }) => {
  const openWindow = () => {
    setOpen(true);
  };

  const closeWindow = () => {
    setOpen(false);
  };

  const incTrans = () => {
    if(trans < 1) {
        setTrans((prev) => prev + 0.1);
    }
  };

  const decTrans = () => {
    if(trans>0) {
        setTrans((prev) => prev - 0.1);
    }
    
  };
  const buttons = [
    { text: "open", callback: openWindow },
    { text: "close", callback: closeWindow },
    { text: "trans+", callback: incTrans },
    { text: "trans-", callback: decTrans },
  ];

  return (
    <div className="button-group">
      {buttons.map((b) => (
        <Button
          customClass="btn-in-group"
          callback={b.callback}
          text={b.text}
        />
      ))}
    </div>
  );
};

export default React.memo(ButtonGroup) ;
