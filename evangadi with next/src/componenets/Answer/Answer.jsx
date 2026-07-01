import React, { useRef } from "react";
import style from "./answer.module.css";
import proImg from "../../../assets/profile.png";
import { FaChevronRight } from "react-icons/fa";
import { useParams } from "react-router-dom";

function Answer({ answerqustion }) {
  const { answer, username } = answerqustion;
  const answerDom = useRef(null);
  const { questionid } = useParams();

  async function handlePost(e) {
    e.preventDefault();
    const answervaleu = answerDom.current.value.trim();

    if (!answervaleu) {
      alert(" Please fill in all fields.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const { data } = await axiosBase.post(
        `/answers/postanswers/ ${questionid}`,
        {
          answer: answervaleu,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("✅ posted successfully");
    } catch (error) {
      alert(error.response?.data?.msg || "Something went wrong!");
    }
  }

  return (
    <div
      className={`${style["card"]} question-card border-top py-3 px-2 px-sm-3`}
    >
      {answer ? (
        <div className="d-flex align-items-center justify-content-between">
          {/* Left side: profile + title */}
          <div className="d-flex align-items-center">
            {/* Profile + username stacked */}
            <div className="d-flex flex-column align-items-center me-3">
              <img
                src={proImg}
                alt="profile"
                className={`${style["profile-img"]} mb-2`}
              />
              <small className="fw-bold">{username}</small>
            </div>
            {/* Question title */}
            <h6 className={`${style.title} mb-0`}>{answer}</h6>
          </div>

          {/* Right side: arrow */}
          <FaChevronRight size={20} className="" />
        </div>
      ) : (
        <p style={{ color: "gray", fontStyle: "italic", margin: 0 }}>
          No answers yet. Be the first to answer 🚀
        </p>
      )}
    </div>
  );
}

export default Answer;
