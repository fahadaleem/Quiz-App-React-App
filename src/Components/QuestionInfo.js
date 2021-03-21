import React, {useContext, useState, useEffect} from "react"
import {QuizContext} from "../Context/QuizContext"


const QuestionInfo = ()=>{
    const {count, category,difficulty } = useContext(QuizContext);

    console.log(difficulty)
    return(
        <div>
            <h1 id="question-count">Question {count+1} of 20</h1>
            <h2 id="category">{category}</h2>
            <div className={`difficuily-level ${difficulty}`}>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            </div>
        </div>
    )
}



export default QuestionInfo