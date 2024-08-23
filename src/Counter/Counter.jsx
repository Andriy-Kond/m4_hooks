import { useState, useEffect } from "react";
import { Button } from "./Counter.styled";

function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(counterA => counterA + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB(counterB => counterB + 1);
  };

  useEffect(() => {
    const totalClicks = counterA + counterB;
    document.title = `Totally clicked ${totalClicks} times`;
  }, [counterA, counterB]);

  return (
    <>
      <Button type="button" onClick={handleCounterAIncrement}>
        Clicked counterA {counterA} times
      </Button>

      <Button type="button" onClick={handleCounterBIncrement}>
        Clicked counterB {counterB} times
      </Button>
    </>
  );
}

export default Counter;
