import React, { useEffect, useState } from "react";
import axiosBase from "../../api/axiosBase"
import Question from "../../componenets/question/Question";
import style from "./home.module.css"
import { Link } from "react-router-dom";
import { useAuth } from "../../utilty/AuthProvider";
function Home() {
  const[resulte,setResult]=useState([])
      const {username}=useAuth()
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
        <Link to="/askq" className="ptm-2 p">
          Ask Question
        </Link>
        <div className={style.user_name}>
          <h5>Welcome:</h5>
          <span style={{ color: "red" }}>{username}</span>
        </div>
      </div>
      {resulte.map((getresulte) => (
        <Question key={getresulte.id} data={getresulte} />
      ))}
    </div>
  );
}

export default Home