import React, {useState, useEffect} from "react"
import { createContext } from "react"
import Data from "../Data/Questions.json" 
import Result from "../Components/Result"

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
    let [answeredQue, setAnsweredQue] = useState(0)
    let [isQuizEnd, setQuizEnd] = useState(false)
    const calculateCurrentScore = ()=>{
       
        const totalQue = count+1;
        const percentage = (score/totalQue)*100;
        setCurrentScore(percentage);
    }

    const calculateAllCorrectScore = ()=>{
        
        
        const remainingQues = 20-answeredQue;
        let totalScore = remainingQues + score;
        const percentage = (totalScore/20)*100
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

        let filteredOptions = options.map(element=>{
            let op = element.replace(/%20/g," ");
            op = op.replace(/%27/,".")
            op = op.replace(/%24/,"$")
            op = op.replace(/%2C/,",")
            return op
        })


        const generateRandom = (arr)=>{
            const array = [];
            for(let i=0;i<arr.length;)
            {
              const randomeNo = Math.floor((Math.random()*arr.length))
        
              if(!array.includes(arr[randomeNo]))
              {
                array.push(arr[randomeNo]);
                i++;
              }
              else if(array.includes)
              {
                continue;
              }
              
            }
            
            return array;
          }

          filteredOptions = generateRandom(filteredOptions);

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

        if(count===19)
        {
            setQuizEnd(true);
            return false
        }
        if(isQuizEnd!=true)
        {
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
    }

    
    const checkAnsHandler = (e)=>{
       

        answeredQue = answeredQue+1;
        setAnsweredQue(answeredQue);
        
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
        calculateCurrentScore();
        calculateAllCorrectScore();
        calculateAllWrongScore();

    }

    console.log(answeredQue);
   
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
        calculateAllCorrectScore();
        calculateAllWrongScore();
    }, [count]);

    return(
        <QuizContext.Provider value={{count, question, category, difficulty, options, correctAns, isDisabled, setIsDisabled,score,  setScore, checkAnsHandler, checkAnsMessage, currentScore, allCorrectScore, allWrongScore, nextQuestionHandler}}>
        {!isQuizEnd?props.children:<Result score={currentScore}/>}
        </QuizContext.Provider>
    )
}


export {
    QuizContext,
    QuizContextProvider
}