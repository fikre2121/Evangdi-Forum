import React from "react";
import style from "./how.module.css";
function How() {
  return (
    <>
      <div className={style.how}>
        <h1>How it works</h1>
      </div>
      <div className={style.second_how}>
        <div>
          <h5>Introduction</h5>
          <p>
            Welcome to EVANGADI FORUM, a platform where technology enthusiasts
            connect, share, and solve problems collaboratively. Our forum is
            designed to help you find answers, contribute your knowledge, and
            engage with a community of like-minded individuals.
          </p>
        </div>

        <div>
          <h5>Creating an Account</h5>
          <p>
            To become a member of our community, please click the 'Sign Up'
            button located at the top right of the page. Enter your email
            address, select a username, and create a password. You will receive
            a confirmation email to activate your account.
          </p>
        </div>
        <div>
          <h5>Exploring Categories</h5>
          <p></p>
          <ul>
            <li>
              Categories displaying questions asked by other forum members.
            </li>
            <li>Pages with detailed views of individual questions.</li>
            <li>Areas where you can post your own questions.</li>
          </ul>
          <p>
            Use the navigation bar to access the home page and to log out from
            the forum.
          </p>
        </div>
        <div>
          <h5>Searching for Questions</h5>
          <p>
            If you are seeking specific questions, utilize the search bar
            located at the top right of the home page. Enter relevant keywords
            to find threads and posts that match your query.
          </p>
        </div>
        <div>
          <h5>Posting a New Question</h5>
          <p>
            To post a new question, provide a clear and descriptive title, and
            include a detailed explanation of your question or topic. Click
            'Post' to submit your inquiry.
          </p>
        </div>
        <div>
          <h5>Posting a New Question</h5>
          <p>
            To post a new question, provide a clear and descriptive title, and
            include a detailed explanation of your question or topic. Click
            'Post' to submit your inquiry.
          </p>
        </div>
        <div>
          <p></p>
          <h5></h5>
        </div>
      </div>
    </>
  );
}

export default How;
