import React, { useEffect, useState } from "react";
import axiosBase from "../../api/axiosBase"
import Question from "../../componenets/question/Question";
import style from "./home.module.css"
import { Link } from "react-router-dom";
function Home() {
  const[resulte,setResult]=useState([])
      
      useEffect(()=>{
      
      (async()=>{
      
      try {
        const token = localStorage.getItem("token");
        const questions = await axiosBase.get("/questions/getAllQuestions", {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        setResult(questions.data)
        console.log(questions.data);
      } catch (error) {
        console.log(response.data.msg);
      }
      
      
      })();
      
      
      },[])
  return (
    <div className={`container ${style.home_top_container}`}>
      <div className={style.top_home}>
        <Link to="/askq" className="ptm-2 p">Ask Question</Link>
        <h5>Welcome: _____</h5>
      </div>
      {resulte.map((getresulte) => (
        <Question key={getresulte.id} data={getresulte} />
      ))}
    </div>
  );
}

export default Home