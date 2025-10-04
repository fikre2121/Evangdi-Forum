import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import How from "./pages/How/How";
import { Routes, Route, } from "react-router-dom";
import Layout from "./componenets/Layout/Layout";
import Askquestion from "./componenets/Askquestion/Askquestion";
import QuestionDetail from "./pages/QuestionDetail/QuestionDetail";
function Routering() {
  
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="how" element={<How />} />
          <Route path="askq" element={<Askquestion />} />
          <Route path="questions/:questionid" element={<QuestionDetail />} />
        </Route>

        <Route path="/" element={<Register />} />
      </Routes>
    </>
  );
}

export default Routering;
