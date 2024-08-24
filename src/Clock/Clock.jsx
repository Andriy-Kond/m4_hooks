import React, { useEffect, useRef, useState } from "react";
import {} from "./Clock.styled";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isOpenTimer, setIsOpenTimer] = useState(false);

  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  const toggleTimer = () => {
    setIsOpenTimer(!isOpenTimer);
  };

  return (
    <>
      {isOpenTimer && <div>{time}</div>}
      <button type="button" onClick={toggleTimer}>
        Open/close Timer === Mount/Unmount Timer
      </button>
    </>
  );
}

export default Clock;
