import React, { useCallback, useRef, useState } from "react";

const StopWatch = () => {
    const [timerSeconds,setTimerSeconds] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const intervalIdRef = useRef<number>(null);
    const startTimer = useCallback(()=>{
        if(!intervalIdRef.current){
            setIsTimerRunning(true);
            intervalIdRef.current = setInterval(()=>{
                setTimerSeconds(prevVal => prevVal+1);
            },1000);
        }
    },[]);
    const stopTimer = useCallback(()=>{
        if(intervalIdRef.current){
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null;
            setIsTimerRunning(false);
        }
    },[]);
    const resetTimer = useCallback(()=>{
        stopTimer();
        setTimerSeconds(0);
    },[]);

    const formatTimer = (currentSeconds:number) => {
        if(currentSeconds > 0){
            const seconds = `0${currentSeconds % 60}`.slice(-2);
            const minutes = `0${Math.floor(currentSeconds/60) % 60}`.slice(-2);
            const hours = `0${Math.floor(currentSeconds/3600)}`.slice(-2);
            return `${hours} : ${minutes} : ${seconds}`;
        }
        else{
            return "00 : 00 : 00"
        }
    }; 

    return (
        <section>
            <h1>Stop Watch</h1>
            <article>
                <h2>{formatTimer(timerSeconds)}</h2>
            </article>
            <article style={{display : "flex",gap : "5px"}}>
                <button onClick={startTimer} disabled={isTimerRunning}>Start Timer</button>
                <button onClick={stopTimer} disabled={!isTimerRunning}>Stop Timer</button>
                <button onClick={resetTimer} disabled={(timerSeconds === 0 && !isTimerRunning)}>Reset Timer</button>
            </article>
        </section>
    );
};

export default React.memo(StopWatch);