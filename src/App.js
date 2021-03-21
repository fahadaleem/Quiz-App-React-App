import logo from './logo.svg';
import './App.css';
import {QuizContextProvider} from "./Context/QuizContext"
import TopProgressBar from "./Components/TopProgressBar"
import QuestionInfo from "./Components/QuestionInfo"
import QuestionAndBtn from "./Components/QuestionAndBtns"
import BottomProgressBar from "./Components/BottomProgressBar"
import NextQueBtn from "./Components/NextQueBtn"
import Result from "./Components/Result"

function App() {
  return (
    <QuizContextProvider>
    <div className="App">
    <TopProgressBar />
    <div id="container">
    <QuestionInfo />
    <QuestionAndBtn />
    <NextQueBtn />
    <BottomProgressBar />
  </div>
    </div>
    </QuizContextProvider>
  );
}

export default App;
