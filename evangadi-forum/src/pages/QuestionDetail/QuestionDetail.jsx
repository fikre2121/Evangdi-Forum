import React, { useEffect, useState, useRef } from "react";
import axiosBase from "../../api/axiosBase";
import { useParams } from "react-router-dom";
import Answer from "../../componenets/Answer/Answer";
import style from "./question.module.css";

function QuestionDetail() {
  const [result, setResult] = useState([]);
  const { questionid } = useParams();
  const answerDom = useRef(null);

  //  Reusable function to fetch all answers
  async function fetchAnswers() {
    try {
      const token = localStorage.getItem("token");
      const response = await axiosBase.get(`/answers/getanswer/${questionid}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResult(response.data);
    } catch (error) {
      console.log(error.response?.data?.msg || error.message);
    }
  }

  //  Fetch answers on component mount & when questionid changes
  useEffect(() => {
    fetchAnswers();
  }, [questionid]);

  // Handle post answer
  async function handlePost(e) {
    e.preventDefault();
    const answerValue = answerDom.current.value.trim();

    if (!answerValue) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axiosBase.post(
        `/answers/postanswers/${questionid}`,
        { answer: answerValue },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert(" Posted successfully");
      answerDom.current.value = ""; // clear input

      //  Re-fetch answers to show the new one immediately
      fetchAnswers();
    } catch (error) {
      alert(error.response?.data?.msg || "Something went wrong!");
    }
  }

  return (
    <>
      {result.length > 0 && (
        <div className={style.answer_top}>
          <h3>{result[0]?.title}</h3>
          <div className={style.underline}></div>
          <p>{result[0]?.description}</p>
        </div>
      )}

      <div className={`container ${style.comunity_container}`}>
        <h2 style={{ paddingTop: "20px" }}>Answers From The Community</h2>
        <div className={`container ${style.home_top_container}`}>
          {result.map((item) => (
            <Answer key={item.id} answerqustion={item} />
          ))}
        </div>
      </div>

      <div className={`container my-5 ${style.postanswer}`}>
        <form
          onSubmit={handlePost}
          className="p-4   "
          style={{ maxWidth: "700px", margin: "0 auto" }}
        >
          <h4 className="mb-3 text-center fw-semibold">Post Your Answer</h4>

          <div className="mb-3">
            <textarea
              ref={answerDom}
              className="form-control"
              placeholder="Write your answer here..."
              rows="5"
              style={{ resize: "none" }}
            ></textarea>
          </div>

          <div className="text-end">
            <button
              type="submit"
              className="btn btn-primary px-4 py-2 rounded-pill "
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default QuestionDetail;
