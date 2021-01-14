import React from 'react'
import './TimerButton.css'

type Props = {
    buttonAction: () => void;
    buttonValue: String;
    
}

const TimerButton : React.FC<Props> = ({buttonAction, buttonValue}) => {
    return (
        <div className="timer-button">
            
            <button className= "btn-value"onClick={buttonAction}>
            {buttonValue} 
            </button>
           
            
        </div>
    )
}

export default TimerButton