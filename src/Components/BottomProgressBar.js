import React, {useContext, useEffect, useState} from "react"
import {QuizContext} from "../Context/QuizContext"


const BottomProgressBar = ()=>{

    const {count, score, currentScore, allCorrectScore, allWrongScore} = useContext(QuizContext);
    // const [currentScore, setCurrentScore] = useState(0);
    // const [allCorrectScore, setAllCorrectScore] = useState(0);
    // const [allWrongScore, setAllWrongScore] = useState(0);

    // const calculateCurrentScore = ()=>{
    //     if(count===0)
    //     {
    //         return false
    //     }
    //     const totalQue = count;
    //     console.log("score", score);
    //     console.log("total", totalQue)
    //     const percentage = (score/totalQue)*100;
    //     setCurrentScore(percentage);
    // }

    // const calculateAllCorrectScore = ()=>{
    //     const remainingQues = 20-count;
    //     let totalScore = remainingQues + score;
    //     const percentage = (totalScore/20)*100
    //     console.log("all correct", percentage)
    //     setAllCorrectScore(percentage);
    // }

    // const calculateAllWrongScore = ()=>{
    //     const percentage = (score/20)*100
    //     setAllWrongScore(percentage)
        
    // }

    // useEffect(() => {
    //     calculateCurrentScore();
    //     calculateAllCorrectScore();
    //     calculateAllWrongScore();
    // }, [count]);


    return(
        <div id="bottom-progress">
            <div id="score">
            <p id="min-score">Current Score: {currentScore}%</p>
            <p id="max-score">{allCorrectScore}%</p>
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