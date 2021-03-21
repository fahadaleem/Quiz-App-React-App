import React, {useState, useEffect} from "react"
import { createContext } from "react"
import Data from "../Data/Questions.json" 


const QuizContext = createContext();




const QuizContextProvider = (props)=>{

    let [count, setCount] = useState(0);
    const [queData, setQueData] = useState(Data[count])
    const [question, setQuestion] = useState('');
    const [correctAns, setCorrectAns] = useState("");
    const [options, setOptions] = useState([]);
    let [category, setCategory] = useState("");
    let [difficulty, setDifficuilty] = useState("")
    const [isDisabled, setIsDisabled] = useState({status:false, class:"none"});
    let [score, setScore] = useState(0);
    const [checkAnsMessage, setCheckAnsMeesage] = useState("");
    const [currentScore, setCurrentScore] = useState(0);
    const [allCorrectScore, setAllCorrectScore] = useState(0);
    const [allWrongScore, setAllWrongScore] = useState(0);


    const calculateCurrentScore = ()=>{
        if(count===0)
        {
            return false
        }
        const totalQue = count;
        console.log("score", score);
        console.log("total", totalQue)
        const percentage = (score/totalQue)*100;
        setCurrentScore(percentage);
    }

    const calculateAllCorrectScore = ()=>{
        const remainingQues = 20-count;
        let totalScore = remainingQues + score;
        const percentage = (totalScore/20)*100
        console.log("all correct", percentage)
        setAllCorrectScore(percentage);
    }

    const calculateAllWrongScore = ()=>{
        const percentage = (score/20)*100
        setAllWrongScore(percentage)
        
    }



    const getQuestion = ()=>{
        const question = queData.question;

        let filteredQue = question.replace(/%20/g," ");
        filteredQue = filteredQue.replace(/%3F/g,"?");
        filteredQue = filteredQue.replace(/%27/g,"'");
        filteredQue = filteredQue.replace(/%22/g,'"');
        filteredQue = filteredQue.replace(/%2C/g,',');

        return filteredQue;
    }
    
    const getOption = ()=>{
        const options = [queData.correct_answer, ...queData.incorrect_answers]

        const filteredOptions = options.map(element=>{
            let op = element.replace(/%20/g," ");
            op = op.replace(/%27/,".")
            op = op.replace(/%24/,"$")
            op = op.replace(/%2C/,",")


            return op
        })
        return filteredOptions;
    }

    const getCategory = ()=>{
        const category = queData.category;
        let filteredCat = category.replace(/%20/g," ");
        filteredCat = filteredCat.replace(/%3A/g,":");
        return filteredCat;
    }

    const getDifficultyAndCorrectAns = ()=>{
        const difficulty = queData.difficulty;
        const correctAns = queData.correct_answer;

        let filteredCorrectAns = correctAns.replace(/%20/g," ")
            filteredCorrectAns = filteredCorrectAns.replace(/%24/g,"$")


        return {
            difficulty,
            filteredCorrectAns
        };

    }

    const nextQuestionHandler = ()=>{
        if(checkAnsMessage==="")
        {
            alert("Please select one option");
            return false;
        }
        count = count+1;
        setCount(count);
        setQueData(Data[count]);
        const correctAns = queData.correct_answer;
        setCorrectAns(correctAns);
        setIsDisabled({status:false, class:"none"});
        setCheckAnsMeesage("")

    }

    
    const checkAnsHandler = (e)=>{
        calculateCurrentScore();
        calculateAllCorrectScore();
        calculateAllWrongScore();


        const selectAns = e.target.textContent
        if(correctAns===selectAns)
        {
            setCheckAnsMeesage("correct!")
            score=score+1;
            setScore(score)
        }
        else 
        {
            setCheckAnsMeesage("Incorrect!")
        }
        setIsDisabled({status:true, class:"select-ans"})

    }
   
    async function init (){
       const options = await  getOption();
       setOptions(options)
        const question = await getQuestion();
        setQuestion(question);
        const category = await getCategory();
        setCategory(category);
        const difficulty = await getDifficultyAndCorrectAns().difficulty;
        setDifficuilty(difficulty); 
        const correctAns  =await getDifficultyAndCorrectAns().filteredCorrectAns;
        setCorrectAns(correctAns)
    }

    useEffect(() => {
      init();
    }, [count]);

    return(
        <QuizContext.Provider value={{count, question, category, difficulty, options, correctAns, isDisabled, setIsDisabled,score,  setScore, checkAnsHandler, checkAnsMessage, currentScore, allCorrectScore, allWrongScore}}>
        {props.children}
        <button onClick={nextQuestionHandler} >Click</button>
       
        </QuizContext.Provider>
    )
}


export {
    QuizContext,
    QuizContextProvider
}