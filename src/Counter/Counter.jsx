import { useState, useEffect, useRef } from "react";
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

  // Патерн ігнорування першого рендеру (у Strict Mode не працює - перший рендер запускається два рази поспіль)
  const isFirstRender = useRef(true);
  // Тому для Strict Mode можна використати моніторинг другого рендеру
  const isSecondRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      console.log("перший рендер", isFirstRender);
      return;
    }

    if (isSecondRender.current) {
      isSecondRender.current = false;
      console.log("другий рендер", isFirstRender);
      return;
    }

    console.log("третій і усі наступні рендери", Date.now());

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
