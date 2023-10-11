import React from "react";

// =============================== nav-data ===============================
import { Navbar,Intro_content } from "../DATA/Introduction_page_DATA";

// =============================== css ===============================
import "./styles/introducationpage.css"
const Introduction_page = () => {
  return (
    <>
      <Header />
      <Intro_content_/>
    </>
  );
};

export default Introduction_page;

export const Header = () => {
  return (
    <>
      {Navbar.map((nav, index) => {
        return (
          <div className="Quiz_header" key={index}>
            <div className="Q_logo">
              <img src={nav.Q_logo} alt="" />
            </div>
            <div className="Q_title">
              <h1>{nav.Q_page_title}</h1>
            </div>
          </div>
        );
      })}
    </>
  );
};

// export const Intro_content_ = () => {
// <>
//     {
//         Intro_content.map((intro_C,index)=>{
//             return(
//               <div className= "Q_container">
//                 <h2>{Intro_content.Intro_content_text_center}</h2>
//                 </div>
//             )
//         })
//     }
// </>

// }


export const Intro_content=()=>{
    <>
    
    </>
}