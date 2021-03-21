import React, {useContext, useState, useEffect} from "react"
import {QuizContext} from "../Context/QuizContext"



const QuestionAndBtn = ()=>{

    let {question, options, correctAns, isDisabled, setIsDisabled,score, setScore, checkAnsHandler, checkAnsMessage} = useContext(QuizContext)


    
   
    return(
        <div>
            <h1>{question}</h1>
            <div>
                {options.map(option=>{
                    return <button onClick={checkAnsHandler} disabled={isDisabled.status}>{option}</button>
                })}
            </div>
            <h1>{checkAnsMessage}</h1>
        </div>
    )
}


export default QuestionAndBtn