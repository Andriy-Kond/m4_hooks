import React, { useEffect, useRef, useState } from "react";
import {} from "./Clock.styled";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isOpenTimer, setIsOpenTimer] = useState(false);

  const intervalId = useRef(null);

  useEffect(() => {
    isOpenTimer &&
      (intervalId.current = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000));

    return () => {
      // clearInterval(intervalId.current);
      stopTimer();
    };
  }, [isOpenTimer]);

  const toggleTimer = () => setIsOpenTimer(!isOpenTimer);

  // const startTimer = () => {
  //   intervalId.current = setInterval(() => {
  //     setTime(new Date().toLocaleTimeString());
  //   }, 1000);
  // };

  const stopTimer = () => clearInterval(intervalId.current);

  console.log("Clock >> intervalId.current:::", intervalId.current);

  return (
    <>
      {isOpenTimer && <div>{time}</div>}
      <button type="button" onClick={toggleTimer}>
        Show/Hide Timer
      </button>
      {/* <button type="button" onClick={startTimer}>
        Start timer
      </button> */}
      <button type="button" onClick={stopTimer}>
        Stop timer
      </button>
    </>
  );
}

export default Clock;
