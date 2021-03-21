import React, {useContext, useState, useEffect} from "react"
import {QuizContext} from "../Context/QuizContext"



const QuestionAndBtn = ()=>{

    let {question, options, isDisabled,  checkAnsHandler, checkAnsMessage} = useContext(QuizContext)


    
   
    return(
        <div>
            <h1 id="question">Q: {question}</h1>
            <div id="buttons">
                {options.map(option=>{
                    return <button onClick={checkAnsHandler} disabled={isDisabled.status} className="answer-btn">{option}</button>
                })}
            </div>
            <h1 id="check-answer-message">{checkAnsMessage}</h1>
        </div>
    )
}


export default QuestionAndBtn