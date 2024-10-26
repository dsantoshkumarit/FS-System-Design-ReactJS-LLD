import { memo, useCallback, useEffect, useRef, useState } from "react";

const CountdownTimer = () => {
    const [timerSeconds, setTimerSeconds] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    
    const timerRef = useRef<number>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const getValidTime = useCallback((value : number | string)=>{
        if(value){
            const inputValue =  Number(value);
            if(inputValue > 3600){
                return 3600;
            }
            else if(inputValue < 0){
                return 5;
            }
            else{
                return inputValue;
            }
        }
        return 0;
    },[]);
    const stopTimer = useCallback(() => {
        if(timerRef.current){
            setIsTimerRunning(false);
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    },[]);
    const startTimer = useCallback(() => {
        if(!isTimerRunning){
            if(inputRef?.current?.value){
                inputRef.current.value = "";
            }
            timerRef.current = setInterval(()=>{
                setTimerSeconds(prevVal => {
                    if(prevVal > 0)
                    {
                        return prevVal-1;
                    }
                    else
                    {
                        stopTimer();
                        return 0;
                    }
                });
            },1000);
            setIsTimerRunning(true);
        }
    },[]);

    useEffect(()=>{
        return ()=>{
            stopTimer();
        };
    },[]);
    
    const handleInput = useCallback((e: { target: { value: string; }; }) => {
        if(e.target.value){
            setTimerSeconds(getValidTime(e.target.value));
        }
    },[]);
    return (
        <section>
            <h1>Countdown Timer</h1>
            <article>
                <input ref={inputRef} type="number" placeholder="Enter countdown seconds" onChange={handleInput} max="3600" maxLength={4} disabled = {isTimerRunning}/>
            </article>
            <article>
                <h2>
                    Time Left : {timerSeconds} secs
                </h2>
            </article>
            <article style={{display:"flex",gap:"5px", justifyContent:"center"}}>
                <button onClick={startTimer} disabled={!!isTimerRunning}>Start Timer</button>
                <button onClick={stopTimer} disabled={!isTimerRunning}>Stop Timer</button>
            </article>
        </section>
    );
}

export default memo(CountdownTimer);