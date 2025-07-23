import React, { useEffect, useState } from 'react';
import Countdown, { zeroPad, formatTimeDelta } from 'react-countdown';

const Timer = ({ timeLeft }) => {
  const [leftTime, setLeftTime] = useState(timeLeft);

  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <span>
        {days}d {zeroPad(hours)}h {zeroPad(minutes)}m {zeroPad(seconds)}s
      </span>
    );
  };

  // const formatTime = (secs) => {
  //   const d = Math.floor(secs / (3600 * 24));
  //   const h = Math.floor((secs % (3600 * 24)) / 3600);
  //   const m = Math.floor((secs % 3600) / 60);
  //   const s = secs % 60;
  //   return `${d}d ${h}h ${m}m ${s}s`;
  // };

  console.log("timeLeft in timer:", timeLeft);
  
  return (
    <Countdown
      date={Date.now() + leftTime}
      renderer={countdownRenderer}
      overtime={true}
      // onComplete={handleComplete}
    />
  );
};

export default Timer;
