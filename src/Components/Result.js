import React from "react"


const Result = (props)=>{
    const {score} = props;

    return(
        <div id="result-card">
            <h1 id="result-title">Result Card</h1>
            <h1>You get {score}%</h1>
        </div>
    )
}




export default Result