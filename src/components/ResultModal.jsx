import { forwardRef, useImperativeHandle, useRef } from "react"
import {createPortal} from "react-dom";
const ResultModal = forwardRef( function ResultModal({  targetTIme, timeCheck, reset}, ref){

    const dialog = useRef();

    const youLost = timeCheck <= 0;
    const remainingTimeInSec = (timeCheck/1000).toFixed(2);
    const score = Math.round((1 - timeCheck / (targetTIme * 1000)) * 100);

    useImperativeHandle(ref, ()=>{
        return{
            hawkTuah(){
                dialog.current.showModal();
            }
        }
    })
    return createPortal(
        <dialog ref = {dialog} className="result-modal"  onClose={reset} >
        { youLost ?<h2> You Lost! </h2> : <h2>Your Score is {score}</h2>}
        <p>The target time was <strong>{targetTIme} seconds.</strong></p>
        <p>You stopped the timer with <strong>{remainingTimeInSec} seconds left</strong></p>
        <form method="dialog" onSubmit={reset}>
            <button >Close</button>
        </form>
        </dialog>,
        document.getElementById("modal")
    )
})

export default ResultModal;