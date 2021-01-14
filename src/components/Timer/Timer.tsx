import React, { useState, useEffect } from 'react';
import './Timer.css'
import TimerButton from '../TimerButton/TimerButton';

const Timer = () => {

  let [hours, setHours] = useState<any>(0);
  let [minutes, setMinutes] = useState<any>(0);
  let [seconds, setSeconds] = useState<any>(0);
  let [action, setAction] = useState<any>();
  let [status, setStatus] = useState<any>(0);
  
  const run = () => {
    if(status != 1){
      setStatus(1);
      setAction(
        setInterval(()=>{
          start();
        }, 1000)
      );
    }
  }

  const start = ()=>{
    if (seconds === 60){
      minutes = minutes + 1;
      setMinutes(minutes);
      seconds = 0;
    }

    if (minutes === 60){
      hours = hours +1;
      setHours(hours);
      minutes = 0;

    }

    setSeconds(seconds++);
  }


  const stop = ()=> {
    if(status != 0){
      setStatus(2)
      clearInterval(action)
    }
  }

  const reset = () => {
    setStatus(0);
    clearInterval(action);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

 
  return (
      <div className="timer">
             <div className="time-container">
                <span>
                  {hours < 10 ? `0${hours}` : hours}:
                </span>
                <span>
                  {minutes < 10 ? `0${minutes}` : minutes}:
                </span>
                <span>
                  {seconds < 10 ? `0${seconds}` : seconds}
                </span>
             </div>

             <div className="timer-button-container">
                 <TimerButton buttonAction={run} buttonValue={"Start"} />
                 <TimerButton buttonAction={stop} buttonValue={"Stop"} />
                 <TimerButton buttonAction={reset} buttonValue={"Restart"} />
             </div>
         </div>
  );
};

export default Timer;
