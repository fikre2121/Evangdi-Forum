import React from 'react'
import style from "./answer.module.css"
import proImg from '../../../assets/profile.png'
import { FaChevronRight } from "react-icons/fa";

function Answer({answerqustion}) {

    const { answer, username } = answerqustion;
  return (
    <>
      
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
              <h6 className={`${style.title} mb-0`}>{answer}</h6>
            </div>

            {/* Right side: arrow */}
            <FaChevronRight size={20} className="" />
          </div>
        </div>
      
    </>
  );
}

export default Answer