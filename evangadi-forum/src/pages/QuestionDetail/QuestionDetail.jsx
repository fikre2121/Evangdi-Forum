import React, { useEffect, useState } from "react";
import axiosBase from "../../api/axiosBase";
import { useParams } from "react-router-dom";
import Answer from "../../componenets/Answer/Answer";
import style from "./question.module.css"

function QuestionDetail() {
  const [resulte, setResult] = useState([]);
  const { questionid } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        const questions = await axiosBase.get(
          `/answers/getanswer/${questionid}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setResult(questions.data);
        console.log(questions.data);
      } catch (error) {
        console.log(response.data.msg);
      }
    })();
  }, []);
  return (
    <>
      <div className={`container ${style.home_top_container}`}>
        {resulte?.map((getresulte) => (
          <Answer key={getresulte.id} answerqustion={getresulte} />
        ))}
      </div>
    </>
  );
}

export default QuestionDetail;
