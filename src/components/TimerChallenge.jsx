import { useRef, useState } from "react"
import ResultModal from "./ResultModal";




export default function TimerChallenge({title, targetTime}){
 const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

 const timer = useRef();
 const dialog = useRef();

 const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

 if(timeRemaining <= 0){
    clearInterval(timer.current);
    setTimeRemaining(targetTime*1000);
    dialog.current.hawkTuah();
 }

    

    function handleStart(){
        timer.current= setInterval(()=> {setTimeRemaining(prevTime => prevTime - 10);

        }, 10);
       

    }

    function handleStop(){
        dialog.current.hawkTuah();
        clearInterval(timer.current);
       
    }

    return(
        <>
           <ResultModal ref = {dialog}result={"Lost"} targetTIme={targetTime} timeCheck={targetTime}/>
            <section className="challenge">
                    <h2>{title}</h2>
                   
                    <p className="challenge-time">
                        {targetTime} second{targetTime > 1?'s': ""}
                    </p>
                    <p>
                        <button onClick={timeIsActive? handleStop : handleStart}>
                           {timeIsActive ? "Stop" : "Start"} Challenge
                        </button>
                    </p>
                    <p className={timeIsActive ? "active" : undefined}>
                        {timeIsActive ? "Time is running" : "Time is inactive"}
                    </p>
            </section>
            </>
    )
}