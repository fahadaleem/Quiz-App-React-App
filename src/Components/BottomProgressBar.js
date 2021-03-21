import React, {useContext, useEffect, useState} from "react"
import {QuizContext} from "../Context/QuizContext"


const BottomProgressBar = ()=>{

    const {count, score, currentScore, allCorrectScore, allWrongScore} = useContext(QuizContext);

    return(
        <div id="bottom-progress">
            <div id="score">
            <p id="min-score">Predicted Min Score: {Math.round(allWrongScore)}%</p>
            <p id="current-score">Current Score: {Math.round(currentScore)}%</p>
            <p id="max-score">Predicted Max Score: {Math.round(allCorrectScore)}%</p>
            </div>
           <div id="all-progress">
           <div id="total-wrong-score" className="progress" style={{width:`${allWrongScore}%`}}>
           </div>
           <div id="correct-answered-score" className="progress" style={{width:`${currentScore}%`}}>
           </div>
           <div id="total-correct-score" className="progress" style={{width:`${allCorrectScore}%`}}>
           </div>
           </div>
            </div>
    )
}


export default BottomProgressBar