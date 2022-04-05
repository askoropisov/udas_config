import React, { useState, useRef, useEffect, useReducer } from "react";
import { Button } from "react-bootstrap";

function Timer(props) {
  const [centiseconds, setCentiseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useInterval(() => {
    if (!timerOn) return;

    setCentiseconds((centiseconds) =>
      centiseconds === 99 ? 0 : centiseconds + 1
    );
  }, 10);

  useInterval(() => {
    if (!timerOn) return;

    setSeconds((seconds) => (seconds === 59 ? 0 : seconds + 1));
  }, 1000);

  useInterval(() => {
    if (!timerOn) return;

    setMinutes((minutes) => (minutes === 59 ? 0 : minutes + 1));
  }, 60000);

  return (
    <>
      <div>
        {String(minutes).padStart(2, "0")} : {String(seconds).padStart(2, "0")}{" "}
        : {String(centiseconds).padStart(2, "0")}
      </div>
      <div>
        {timerOn === false && (
          <Button onClick={() => setTimerOn(true)}>Насос Вкл</Button>
        )}
        {timerOn === true && (
          <Button onClick={() => setTimerOn(false)}>Насос Выкл</Button>
        )}
        {/* {
          <Button
            onClick={() => {
              setTimerOn(false);
              setCentiseconds(0);
              setSeconds(0);
              setMinutes(0);
            }}
          >
            Сброс
          </Button>
        } */}
      </div>
    </>
  );
}


// source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Timer

// ReactDOM.render(
//   <React.StrictMode>
//     <Timer />
//   </React.StrictMode>,
//   document.getElementById("root")
// );