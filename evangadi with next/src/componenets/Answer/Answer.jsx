// Answer.jsx
import React, { useRef, useState } from "react";
import style from "./answer.module.css";
import proImg from "../../../assets/profile.png";
import { FaChevronRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axiosBase from "../../api/axiosBase"; // Added reference to prevent crashes

function Answer({ answerqustion }) {
  // Destructure with default fallbacks to prevent runtime crashes
  const { answer, username } = answerqustion || {};
  const answerDom = useRef(null);
  const { questionid } = useParams();

  // Local state to manage loading and UI feedback safely without ugly browser alerts
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  async function handlePost(e) {
    e.preventDefault();
    const answervaleu = answerDom.current?.value.trim();

    if (!answervaleu) {
      setFeedback({ type: "error", message: "Please fill in all fields." });
      return;
    }

    try {
      setIsSubmitting(true);
      setFeedback({ type: "", message: "" });

      const token = localStorage.getItem("token");
      // FIXED: Removed the accidental whitespace inside the backticks string
      await axiosBase.post(
        `/answers/postanswers/${questionid}`,
        { answer: answervaleu },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      setFeedback({ type: "success", message: "Answer posted successfully!" });
      if (answerDom.current) answerDom.current.value = ""; // Clear form input
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.response?.data?.msg || "Something went wrong!",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={`${style["card-wrapper"]} my-3`}>
      <div className={`${style["card"]} question-card border-top py-3 px-3`}>
        {answer ? (
          <div className="d-flex align-items-center justify-content-between">
            {/* Left side: profile + text content */}
            <div className="d-flex align-items-center">
              {/* Profile image + username stacked */}
              <div className="d-flex flex-column align-items-center me-4">
                <div className={style["image-container"]}>
                  <img
                    src={proImg}
                    alt={`${username || "User"}'s profile`}
                    className={style["profile-img"]}
                  />
                </div>
                <small className={`${style["username"]} fw-bold mt-1`}>
                  {username}
                </small>
              </div>

              {/* Answer Content */}
              <h6 className={`${style.title} mb-0`}>{answer}</h6>
            </div>

            {/* Right side: Modern interactive arrow */}
            <div className={style["icon-wrapper"]}>
              <FaChevronRight size={16} />
            </div>
          </div>
        ) : (
          /* Empty State View */
          <div className={style["empty-state"]}>
            <p className="mb-0">No answers yet. Share your knowledge below!</p>
          </div>
        )}
      </div>

      {/* Modern Answer Form Area (Triggered only when no answer is present) */}
      {!answer && (
        <form
          onSubmit={handlePost}
          className={`${style["form-container"]} mt-3`}
        >
          <textarea
            ref={answerDom}
            rows="3"
            placeholder="Type your professional answer here..."
            className={style["textarea"]}
            disabled={isSubmitting}
          />

          {feedback.message && (
            <div className={`${style["feedback-msg"]} ${style[feedback.type]}`}>
              {feedback.message}
            </div>
          )}

          <div className="d-flex justify-content-end mt-2">
            <button
              type="submit"
              className={style["submit-btn"]}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Posting..." : "Post Answer"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Answer;
