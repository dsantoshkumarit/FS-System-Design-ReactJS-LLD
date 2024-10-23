import { useEffect, useRef, useState } from "react";

const CountdownTimer = () => {
    const [timerSeconds, setTimerSeconds] = useState(0);
    
    const timerRef = useRef<number>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const stopTimer = () => {
        if(timerRef.current){
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };
    const startTimer = () => {
        if(inputRef?.current?.value || (timerSeconds > 0 && !timerRef?.current)){
            inputRef.current.value = "";
            timerRef.current = setInterval(()=>{
                setTimerSeconds(prevVal => {
                    if(prevVal > 0)
                    {
                        return prevVal-1;
                    }
                    else{
                        stopTimer();
                        return 0;
                    }
                }
            );
            },1000);
        }
    };

    useEffect(()=>{
        return ()=>{
            stopTimer();
        }
    },[]);
    
    const handleInput = (e: { target: { value: string; }; }) => {
        if(e.target.value){
            const inputValue =  Number(e.target.value);
            if(inputValue > 3600){
                setTimerSeconds(3600);
            }
            else if(inputValue < 0){
                setTimerSeconds(5);
            }
            else{
                setTimerSeconds(inputValue);
            }
        }
    };
    return (
        <section>
            <h1>Countdown Timer</h1>
            <article>
                <input ref={inputRef} type="number" placeholder="Enter countdown seconds" onChange={handleInput} max="3600" maxLength={4}/>
                <button onClick={startTimer} disabled={!timerSeconds}>Start Timer</button>
                <button onClick={stopTimer}>Stop Timer</button>
            </article>
            <article>
                <h2>
                    Time Left : {timerSeconds} secs
                </h2>
            </article>
        </section>
    );
}

export default CountdownTimer;