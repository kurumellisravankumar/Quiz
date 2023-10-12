import React from "react";
import { Quiz_Header ,Q_LC} from "../DATA/Quiz.app_data";
import "./styles/quizapp.css";

const Quiz = () => {
  return (
    <>
      <Header_Quiz />
      <div className="quiz_container">
        <Left_Quiz />
        <Right_Quiz />
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

export const Left_Quiz = () => {

return(
  
  <>{Q_LC.map((Q_LC,index)=>{
      return(
        <div key={index} className="Q_left_container">
          <div className="Q_S_btn">
            <button><a href="#">{Q_LC.sP}</a></button>
            <button><a href="#">{Q_LC.sC}</a></button>
            <button><a href="#">{Q_LC.sM}</a></button>
          </div>
          <hr />
          <div className="single_select_question_container">
            <div>
              <button>
               {Q_LC.ssc}
              </button>
            </div>

            <div className="marks_time">
         <p>MARKS:</p>
              <button className="positive_four_marks">+4</button>
              <button className="negitive_marks">-1</button>
              <div>time</div>


            </div>
          </div>
        </div>
      )
    })
  }
  </>
) 
 };

export const Right_Quiz = () => {
  return <><div>right</div></>;
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