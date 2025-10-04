import React from "react";
import { FaChevronRight } from "react-icons/fa";
import proImg from "../../../assets/profile.png";
import style from"./question.module.css"; 
import { Link } from "react-router-dom";
// custom styles for hover + image

function Question({ data }) {
  const { title, username, questionid } = data;

  return (
    <Link
      to={`/questions/${questionid}`}
      className={`py-3 px-2 px-sm-3 d-block text-decoration-none text-dark`}
    >
      <div
        className={`${style["card"]} question-card border-top py-3 px-2 px-sm-3`}
      >
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
            <h6 className={`${style.title} mb-0`}>{title}</h6>
          </div>

          {/* Right side: arrow */}
          <FaChevronRight size={20} className="" />
        </div>
      </div>
    </Link>
  );
}

export default Question;
