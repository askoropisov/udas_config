import axios from "axios";
import React, { useState, useRef, useEffect} from "react";
import { Button } from "react-bootstrap";


//простой секундомер по логике SetInterval
function Timer(props) {
  const [centiseconds, setCentiseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const handleStartPump = async() => {
    await axios.post("/api/flowmeter/grad/startPump")
            .then(res => console.log("startPump", res))
            .catch(err => console.log("Error", err))
    setTimerOn(true)
  }

  const handleStopPump = async() => {
    await axios.post("/api/flowmeter/grad/stopPump")
            .then(res => console.log("stopPump", res))
            .catch(err => console.log("Error", err))
    setTimerOn(false)
    props.getTime(minutes+":"+seconds)
  }

  useInterval(() => {
    if (!timerOn) return;

    setCentiseconds((centiseconds) => (centiseconds === 90 ? 0 : centiseconds + 10));
    if(centiseconds % 1000 === 0) {
      setSeconds((seconds) => (seconds === 59 ? 0 : seconds + 1));
      if(seconds === 59) {
        setSeconds(0)
        setMinutes(minutes + 1)
      }
      else setSeconds(seconds + 1)
    }    
  }, 100)

  return (
    <>
      <div>
        {String(minutes).padStart(2, "0")} : {String(seconds).padStart(2, "0")}
      </div>
      <div>
        {timerOn === false && (
          <Button onClick={handleStartPump}>Насос Вкл</Button>
        )}
        {timerOn === true && (
          <Button onClick={handleStopPump}>Насос Выкл</Button>
        )}
        {/* {<Button
            onClick={() => {
              setTimerOn(false);
              setCentiseconds(0);
              setSeconds(0);
              setMinutes(0);
            }}>Сброс</Button>
        } */}
      </div>
    </>
  );
}

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