import React,{useRef} from "react";
import { FaArrowRight } from "react-icons/fa"; // arrow icon
import style from "./askquestion.module.css";
import axiosBase from "../../api/axiosBase";
function Askquestion() {
  const titleDom = useRef(null);
    const detailDom = useRef(null);

    async function handleLpost(e) {
      e.preventDefault();
      const titlevaleu = titleDom.current.value.trim();
      const detailvaleu = detailDom.current.value.trim();

      if (!titlevaleu || !detailvaleu) {
        alert(" Please fill in all fields.");
        return;
      }

      try {
        const token = localStorage.getItem("token");
        const { data } = await axiosBase.post(
          "/questions/post",
          {
            title: titlevaleu,
            description: detailvaleu,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        alert("✅ posted successfully");
        
       
      } catch (error) {
        alert(error.response?.data?.msg || "Something went wrong!");
      }
    }



  return (
    <div className={`container ${style.about_question}`}>
      <h3 className="text-center mb-4">Steps To Write A Good Question</h3>

      <div className="row g-3">
        <div className="col-12 d-flex align-items-start">
          <FaArrowRight className={`${style.icon} me-2`} />
          <p className="mb-0">Summarize your problem in a one-line title</p>
        </div>

        <div className="col-12 d-flex align-items-start">
          <FaArrowRight className={`${style.icon} me-2`} />
          <p className="mb-0">Describe your problem in more detail</p>
        </div>

        <div className="col-12 d-flex align-items-start">
          <FaArrowRight className={`${style.icon} me-2`} />
          <p className="mb-0">
            Explain what you tried and what you expected to happen
          </p>
        </div>

        <div className="col-12 d-flex align-items-start">
          <FaArrowRight className={`${style.icon} me-2`} />
          <p className="mb-0">Review your question and post it here</p>
        </div>
      </div>
      {/* the form */}
      <form onSubmit={handleLpost} className="mt-5 container">
        <h2 className="mb-4">Post Your Question</h2>
        <div className="mb-3">
          <input
          ref={titleDom}
            type="text"
            id="title"
            name="title"
            className="form-control"
            placeholder="Enter a clear and concise title"
            
          />
        </div>

        <div className="mb-3">
          <textarea
          ref={detailDom}
            id="details"
            name="details"
            className="form-control"
            placeholder="Provide more context about your question"
            rows={4}
           
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-10">
          Post Question
        </button>
      </form>
    </div>
  );
}

export default Askquestion;
