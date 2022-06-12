import React, { useEffect, useState } from 'react'

const Timer = (props) => {
    const {initialHour = 10,initialMinute = 10,initialSeconds = 0} = props;
    const [ hours, setHours ] = useState(initialHour);
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        let myIntervalHr = setInterval(() => {
            if (minutes > 0) {
                setMinutes(minutes - 1);
            }
            if (minutes === 0) {
                if (hours === 0) {
                    clearInterval(myInterval)
                } else {
                    setHours(hours - 1);
                    setMinutes(59);
                }
            } 
        }, 60000)
        return () => {
            clearInterval(myInterval);
            clearInterval(myIntervalHr);
          };
    });

    return (
        <div className='timer'>
        { minutes === 0 && seconds === 0
            ? null
            : <p>{hours}:{minutes< 10 ? `0${minutes}` : minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</p> 
        }
        </div>
    )
}

export default Timer;