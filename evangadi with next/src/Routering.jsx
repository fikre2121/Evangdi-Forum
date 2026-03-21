import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import How from "./pages/How/How";
import { Routes, Route } from "react-router-dom";
import Layout from "./componenets/Layout/Layout";
import Askquestion from "./componenets/Askquestion/Askquestion";
import QuestionDetail from "./pages/QuestionDetail/QuestionDetail";
import ProtectRouting from "./componenets/protectRouting/ProtectRouting";
import Landing from "./pages/Landing/Landing";
function Routering() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<Layout />}>
          <Route
            path="home"
            element={
              <ProtectRouting>
                <Home />
              </ProtectRouting>
            }
          />
          <Route path="how" element={<How />} />
          <Route path="askq" element={<Askquestion />} />
          <Route path="questions/:questionid" element={<QuestionDetail />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* <Route path="how" element={<Landing />} /> */}
      </Routes>
    </>
  );
}

export default Routering;
