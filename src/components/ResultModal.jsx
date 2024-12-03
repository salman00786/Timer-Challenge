import { forwardRef, useImperativeHandle, useRef } from "react"
const ResultModal = forwardRef( function ResultModal({ result, targetTIme, timeCheck}, ref){

    const dialog = useRef();

    useImperativeHandle(ref, ()=>{
        return{
            hawkTuah(){
                dialog.current.showModal();
            }
        }
    })
    return(
        <dialog ref = {dialog} className="result-modal"  >
        <h2> You {result}! </h2>
        <p>The target time was <strong>{targetTIme} seconds.</strong></p>
        <p>You stopped the timer with <strong>{timeCheck} seconds left</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
        </dialog>
    )
})

export default ResultModal;