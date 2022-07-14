
import './App.css';
import quest from './components/quest';
import  { useState } from "react";
function App() {
  const [questionIndex , setQuestionIndex] =useState(0);
  const [score , setScore] = useState(0);
  const [result , setResult] = useState(false);
  const Replay = () =>
  {
    setQuestionIndex(0);
    setScore(0);
    setResult(false);
  }
  const present_question = quest[questionIndex];
  const get_choice = (index) =>
  {
    if(present_question.answer === index)
    {
      setScore(score + 1);
    }
    const next = questionIndex +1
    if(next <quest.length)
    {
      setQuestionIndex(questionIndex +1)
    }
    else {
      setResult(true);
    }
  };
 
  return (
    <div className="quiz-box">
      {result ?(<> <h3>{score}</h3> 
      <br/>  
      <button onClick={Replay}> Play Again</button> </>) : (<div className="quiz-question">
        {present_question.question}
      <div className="options"></div>
        <ul className="quiz-ul">
          {present_question.options.map((options,i)=>
          { return<li className="quiz-li" onClick={() => get_choice(i)}> {options}</li>
          })} 
  
          </ul>
          </div>) }
    </div>
  );
}

export default App;
