import React, {useContext} from "react"
import {QuizContext} from "../Context/QuizContext"


const NextQueBtn = ()=>{

    const {nextQuestionHandler} = useContext(QuizContext)

    return(
        <div style={{textAlign:"center"}}>
        <button id="next-que-btn" onClick={nextQuestionHandler}>Next Question</button>
        </div>
    )
}

export default NextQueBtn 