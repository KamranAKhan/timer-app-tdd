import React, { useState } from 'react';
import './Timer.css';
import TimerButton from '../TimerButton/TimerButton';

function Timer() {

  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [timerCurrentStatus, setTimerCurrentStatus] = useState(0);
  const [timerInterval, setTimerInterval] = useState({});

  const startTimer = () => {
    if (timerCurrentStatus !== 1) {
      runTimer();
      setTimerCurrentStatus(1);
      setTimerInterval(setInterval(runTimer, 10));
    }
  }

  const stopTimer = () => {
    clearInterval(Number(timerInterval));
    setTimerCurrentStatus(2);
  }

  const resetTimer = () => {
    clearInterval(Number(timerInterval));
    setTimerCurrentStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  }

  var updateMs = time.ms;
  var updateS = time.s;
  var updateM = time.m;
  var updateH = time.h;

  const runTimer = () => {
    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }

    if (updateM === 60) {
      updateH++;
      updateS = 0;
    }
    updateMs++;
    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
  };

  return (
    <div className="timer-container">
      <h1>Timer App</h1>
      <div className="time-display">
        {/* <img src={process.env.PUBLIC_URL + '/logo.png'} alt={'Timer logo'} /> */}
        <p>
          {time.m < 10 ? `0${time.m}` : + time.m}:
          {time.s < 10 ? `0${time.s}` : + time.s}
          {/* {time.ms < 10 ? `0${time.ms}` : time.ms} */}
        </p>
      </div>
      <div className="timer-button-container">
        <TimerButton buttonAction={startTimer} buttonValue={'Start'} />
        <TimerButton buttonAction={stopTimer} buttonValue={'Stop'} />
        <TimerButton buttonAction={resetTimer} buttonValue={'Reset'} />
      </div>
    </div>
  );
}

export default Timer;