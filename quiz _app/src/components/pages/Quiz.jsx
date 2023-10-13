import React, { useEffect, useState } from "react";
import { Quiz_Header, Q_LC } from "../DATA/Quiz.app_data";
import "./styles/quizapp.css";

import axios from "axios";

const Quiz = () => {
  return (
    <>
      <Header_Quiz />
      <div className="quiz_container">
        <Left_Quiz />
        {/* <Right_Quiz /> */}
      </div>
      <Footer_Quiz />
    </>
  );
};

export default Quiz;

export const Header_Quiz = () => {
  return (
    <>
      {Quiz_Header.map((q_h, INDEX) => {
        return (
          <div className="quiz_header" key={INDEX}>
            <div className="Quiz__logo">
              <img src={q_h.Q_log} alt="" />
            </div>
            <h1>{q_h.Q_title}</h1>
          </div>
        );
      })}
    </>
  );
};

// ---------------letf container---------------------------------------
export const Left_Quiz = () => {
  // ---------------question count---------------------------------------
  const [count, setCount] = useState(1);
  // ---------------for submit---------------------------------------

  const [savenext, setSaveNext] = useState("save&next");
const [activeQ,setActiveQ]=useState()
  const handlesave_next = () => {
    if(activeQ!==data.length-1){
      setActiveQ((pre)=>pre+1);
    }




    if (count < 30) {
      // ---------------question count increment up to  30 ---------------------------------------

      setCount(count + 1);
    }

    // ---------------for submit---------------------------------------
    else if (count == 30) {
      setSaveNext("submit");
    } else {
      setCount(count );
    }
  };

  const handlesave_pre = () => {
    // if (count == 30) {
    //   setCount(count - 1);
    // } else if (count == 1);
    // setCount(count);

    if(count <30  && count >1 ){
      setCount(count-1)
    }
    
  };
  return (
    <>
      {Q_LC.map((Q_LC, index) => {
        return (
          <div key={index} className="Q_left_container">
            <div className="Q_S_btn">
              <button>
                <a href="#">{Q_LC.sP}</a>
              </button>
              <button>
                <a href="#">{Q_LC.sC}</a>
              </button>
              <button>
                <a href="#">{Q_LC.sM}</a>
              </button>
            </div>
            <hr />
            <div className="single_select_question_container">
              <div>
                <button>{Q_LC.ssc}</button>
              </div>

              <div className="marks_time">
                <p>MARKS:</p>
                <button className="positive_four_marks">+4</button>
                <button className="negitive_marks">-1</button>
                <div>time</div>
              </div>
            </div>
            <hr />
            <div className="Q_qustions">
              <h1>QNO:{count}/30</h1>
            </div>
            <hr />

            {/* <div className="Q_Anwser">
              <div>
                <input type="radio" id="A" />
                <label htmlFor="A">A</label>
              </div>
              <div>
                <input type="radio" id="B" />
                <label htmlFor="B">B</label>
              </div>
              <div>
                <input type="radio" id="C" />
                <label htmlFor="C">C</label>
              </div>
              <div>
                <input type="radio" id="D" />
                <label htmlFor="D">D</label>
              </div>
            </div> */}
            <Q_Q_A/>
            <hr />

            <div className="Q_control_buttons">
              <div>
                <button>
                  <a href="#">{Q_LC.M_N}</a>
                </button>
                <button>
                  <a href="#">{Q_LC.C_R}</a>
                </button>
                <button>
                  <a href="#" onClick={handlesave_pre}>
                    {Q_LC.P}
                  </a>
                </button>
              </div>
              <button>
                <a href="#" onClick={handlesave_next}>
                  {savenext}
                </a>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export const Q_Q_A = () => {

  const [data, setData] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8000/")
            .then(res => setData(res.data))
            .catch(err => console.log(err));

    }, [])

  return <>
{data.map((i, index) => {
  return(
    <div >
      <h1>{i.Qusestions}</h1>
      <input type="radio"  /> <label htmlFor="op1">{i.option1}</label>
      <input type="radio"  /> <label htmlFor="op1">{i.option2}</label>
      <input type="radio"  /> <label htmlFor="op1">{i.option3}</label>
      <input type="radio"  /> <label htmlFor="op1">{i.option4}</label>

    </div>
  )
})}
  </>;
};

export const Right_Quiz = () => {
  return (
    <>
      {Q_RC.map((Q_RC, index) => {
        <div key={index} className="Q_Right_container">
          <div className="Right_C_time_left">
            <div className="Q_C_N"></div>
            <div className="Q_T_L"></div>
          </div>
        </div>;
      })}
    </>
  );
};
export const Footer_Quiz = () => {
  return <></>;
};

// import React, { useState, useEffect } from 'react';

// const Quiz = () => {
//   const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
//   const [isActive, setIsActive] = useState(false);

//   const toggleTimer = () => {
//     setIsActive(!isActive);
//   };

//   useEffect(() => {
//     let interval;
//     if (isActive) {
//       interval = setInterval(() => {
//         const newTime = { ...time };
//         if (newTime.seconds < 59) {
//           newTime.seconds++;
//         } else {
//           newTime.seconds = 0;
//           if (newTime.minutes < 59) {
//             newTime.minutes++;
//           } else {
//             newTime.minutes = 0;
//             newTime.hours++;
//           }
//         }
//         setTime(newTime);
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [isActive, time]);

//   const resetTimer = () => {
//     setTime({ hours: 0, minutes: 0, seconds: 0 });
//     setIsActive(false);
//   };

//   // Convert time to a string for display
//   const timeString = `${time.hours}h ${time.minutes}m ${time.seconds}s`;

//   return (
//     <div>
//       <div>{timeString}</div>
//       <button onClick={toggleTimer}>
//         {isActive ? 'Pause' : 'Start'}
//       </button>
//       <button onClick={resetTimer}>Reset</button>
//     </div>
//   );
// }
// export default Quiz;

// import React, { useState } from 'react';
// import Question from './Question';

// const questions = [
//   {
//     question: 'What is 2 + 2?',
//     options: ['3', '4', '5', '6'],
//     correctAnswer: '4',
//   },
//   {
//     question: 'What is the capital of France?',
//     options: ['Berlin', 'London', 'Madrid', 'Paris'],
//     correctAnswer: 'Paris',
//   },
//   {
//     question: 'Which planet is known as the Red Planet?',
//     options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
//     correctAnswer: 'Mars',
//   },
// ];

// const Quiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);

//   const handleAnswer = (selectedAnswer) => {
//     if (selectedAnswer === questions[currentQuestion].correctAnswer) {
//       setScore(score + 1);
//     }

//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   return (
//     <div>
//       {currentQuestion < questions.length ? (
//         <Question
//           question={questions[currentQuestion]}
//           onAnswer={handleAnswer}
//         />
//       ) : (
//         <div>
//           <h2>Quiz completed! Your Score: {score} / {questions.length}</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Quiz;

// export const Question = ({ question, onAnswer }) => {
//   const [selectedAnswer, setSelectedAnswer] = useState(null);

//   const handleOptionClick = (option) => {
//     setSelectedAnswer(option);
//   };

//   return (
//     <div>
//       <h3>{question.question}</h3>
//       <ul>
//         {question.options.map((option, index) => (
//           <li
//             key={index}
//             onClick={() => handleOptionClick(option)}
//             className={
//               selectedAnswer === option
//                 ? 'selected'
//                 : selectedAnswer === question.correctAnswer
//                 ? 'correct'
//                 : ''
//             }
//           >
//             {option}
//           </li>
//         ))}
//       </ul>
//       <button
//         onClick={() => onAnswer(selectedAnswer)}
//         disabled={selectedAnswer === null}
//       >
//         Next
//       </button>
//     </div>
//   );
// };
