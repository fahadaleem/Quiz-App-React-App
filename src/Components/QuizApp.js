import logo from './logo.svg';
import '../App.css';
import {QuizContextProvider} from "../Context/QuizContext"
import TopProgressBar from "./TopProgressBar"
import QuestionInfo from "./QuestionInfo"
import QuestionAndBtn from ".QuestionAndBtns"
import BottomProgressBar from ".BottomProgressBar"
import NextQueBtn from ".NextQueBtn"
import Result from "./Result"
function QuizApp() {
  return (
    <QuizContextProvider>
    <div className="App">
    <TopProgressBar />
    {false?<div id="container">
    <QuestionInfo />
    <QuestionAndBtn />
    <NextQueBtn />
    <BottomProgressBar />
  </div>:"fahad"}
    </div>
    </QuizContextProvider>
  );
}

export default QuizApp;
