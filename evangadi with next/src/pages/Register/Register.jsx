import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosBase from "../../api/axiosBase";
import styles from "./Register.module.css";
import { useAuth } from "../../utilty/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import bgImg from "../../../assets/registerimg.svg";
function AuthPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState();

  const emailDom = useRef(null);
  const passwordDom = useRef(null);
  const usernameDom = useRef(null);
  const firstNameDom = useRef(null);
  const lastNameDom = useRef(null);

  async function handleLogin(e) {
    e.preventDefault();
    const emailvaleu = emailDom.current.value.trim();
    const passwordvaleu = passwordDom.current.value.trim();

    if (!emailvaleu || !passwordvaleu) {
      alert(" Please fill in all fields.");
      return;
    }

    try {
      const { data } = await axiosBase.post("/users/login", {
        email: emailvaleu,
        password: passwordvaleu,
      });

      alert("Logged in successfully");
      login(data.token, data.username);
      navigate("/home");
    } catch (error) {
      alert(error.response?.data?.msg || "Something went wrong!");
    }
  }

  async function handleRegister(e) {
    e.preventDefault();

    const usernamevaleu = usernameDom.current.value.trim();
    const firstnamevaleu = firstNameDom.current.value.trim();
    const lastnamevaleu = lastNameDom.current.value.trim();
    const emailvaleu = emailDom.current.value.trim();
    const passwordvaleu = passwordDom.current.value.trim();

    if (
      !usernamevaleu ||
      !firstnamevaleu ||
      !lastnamevaleu ||
      !emailvaleu ||
      !passwordvaleu
    ) {
      alert(" Please fill in all fields.");
      return;
    }

    try {
      await axiosBase.post("/users/register", {
        username: usernamevaleu,
        firstname: firstnamevaleu,
        lastname: lastnamevaleu,
        email: emailvaleu,
        password: passwordvaleu,
      });

      alert(" Registered successfully, please login");
      setIsLogin(true);
    } catch (error) {
      alert(error.response?.data?.msg || "❌ Something went wrong!");
    }
  }

  return (
    <div
      className={`container-fluid ${styles.container}`}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="row align-items-center min-vh-100">
        {/* Left Side - Form */}
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className={`${styles.formBox} w-100 p-4`}>
            {isLogin ? (
              <>
                <h2 className={`${styles.title} text-center`}>Welcome Back</h2>
                <p className={`${styles.signInText} text-center`}>
                  Don’t have an account?{" "}
                  <button
                    type="button"
                    className={`${styles.linkBtn} btn btn-link p-0`}
                    onClick={() => setIsLogin(false)}
                  >
                    Register
                  </button>
                </p>
                <form className={styles.form} onSubmit={handleLogin}>
                  <input
                    className="form-control mb-3"
                    ref={emailDom}
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <div
                    className={`position-relative mb-3 ${styles.passwordWrapper}`}
                  >
                    <input
                      className="form-control"
                      ref={passwordDom}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      required
                    />
                    <span
                      className={styles.togglePassword}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                </form>
              </>
            ) : (
              <>
                <h2 className={`${styles.title} text-center`}>
                  Join the Network
                </h2>
                <p className={`${styles.signInText} text-center`}>
                  Already have an account?{" "}
                  <button
                    type="button"
                    className={`${styles.linkBtn} `}
                    onClick={() => setIsLogin(true)}
                  >
                    Sign in
                  </button>
                </p>

                <form className={styles.form} onSubmit={handleRegister}>
                  <input
                    className="form-control mb-3"
                    ref={usernameDom}
                    type="text"
                    placeholder="User Name"
                    required
                  />
                  <div className="row">
                    <div className="col-6 mb-3">
                      <input
                        className="form-control"
                        ref={firstNameDom}
                        type="text"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="col-6 mb-3">
                      <input
                        className="form-control"
                        ref={lastNameDom}
                        type="text"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>

                  <input
                    className="form-control mb-3"
                    ref={emailDom}
                    type="email"
                    placeholder="Email"
                    required
                  />

                  <div
                    className={`position-relative mb-3 ${styles.passwordWrapper}`}
                  >
                    <input
                      className="form-control"
                      ref={passwordDom}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      required
                    />
                    <span
                      className={styles.togglePassword}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                  <button type="submit" className={`w-100 ${styles.btnn}`}>
                    Agree and Join
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Right Side - About Section */}
        <div className="col-12 col-md-6 d-none d-lg-flex justify-content-center text-center">
          <div className={`${styles.aboutBox} p-4`}>
            <h4>About</h4>
            <h2>Evangadi Networks Q&A</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              voluptate officiis beatae nobis pariatur omnis facere accusamus
              laboriosam hic, adipisci vero reiciendis, recusandae sit ad.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              voluptate officiis beatae nobis pariatur omnis facere accusamus
              laboriosam hic, adipisci vero reiciendis, recusandae sit ad.
            </p>
            <Link className={styles.btn} to="/how">
              HOW IT WORKS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
