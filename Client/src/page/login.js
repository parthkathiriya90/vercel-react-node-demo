import React, { useState, useEffect } from "react";
import { authServices } from "../services/auth.services";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [screen, setScreen] = useState("login");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (authServices.isUserLoggedIn()) navigate("/profile");
  }, []);

  function clearMessages() {
    setSuccessMsg("");
    setErrorMsg("");
    setIsLoading(false);
  }

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePwdChange = (e) => {
    setPassword(e.target.value);
  };
  const handleOTPChange = (e) => {
    setOtp(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    clearMessages();
    if (userEmail !== "" && password !== "") {
      let payload = {
        email: userEmail,
        password: password,
      };
      setIsLoading(true);
      authServices
        .login(payload)
        .then((result) => {
          if (result.isSuccessful) {
            localStorage.setItem("accessToken", result.access_token);
            navigate("/profile");
            console.log(result);
          } else {
            if (result.isVerified === false || result.status===409) {
              console.log(result);
              setScreen("verifyEmail");
              handleResendOTP(e);
            } else {
              setScreen("login");
              setErrorMsg(result.message);
              console.log(result.message);
            }
          }
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  };

  const handleResendOTP = async (e) => {
    e.preventDefault();
    clearMessages();
    if (userEmail !== "") {
      let payload = {
        email: userEmail,
      };
      setIsLoading(true);
      authServices
        .resendOTP(payload)
        .then((result) => {
          if (result.isSuccessful) {
            setSuccessMsg(result.message)
            setIsLoading(false);
          } else {
            setSuccessMsg("")
            setErrorMsg(result.message);
          }
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  };

  const handleOTPVerify = async (e) => {
    e.preventDefault();
    clearMessages();
    if (userEmail !== "" && otp !== "") {
      let payload = {
        email: userEmail,
        otp: otp,
      };
      setIsLoading(true);
      authServices
        .verifyOTP(payload)
        .then((result) => {
          if (result.isSuccessful) {
            handleLogin(e);
          } else {
            setIsLoading(false);
            setErrorMsg(result.message);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <div className="login-wrapp ">
        <div className="form-box">
        {successMsg && successMsg !== "" && (
            <div className="top-msg success-msg">
              <p>
                <i className="fa-solid fa-circle-check"></i>
                {successMsg}
              </p>
            </div>
          )}
          {errorMsg && errorMsg !== "" && (
            <div className="top-msg error-msg">
              <p>
                <i className="fa-solid fa-circle-xmark"></i>
                {errorMsg}
              </p>
            </div>
          )}
          <Link className="logo" to="/">
            <img src="../images/logo.svg" alt="" />
          </Link>
          {screen === "login" && (
            <>
              <form method="post">
                <div className="input-box">
                  <label>Email</label>
                  <input
                    type="email"
                    name="user-email"
                    required
                    onChange={(event) => handleEmailChange(event)}
                  />
                </div>
                <div className="input-box">
                  <label>Password</label>
                  <input
                    type={showPwd ? "text" : "password"}
                    name="user-pwd"
                    required
                    onChange={(event) => handlePwdChange(event)}
                  />
                  <i
                    className={
                      showPwd
                        ? "fa-solid fa-eye-slash eye-icon"
                        : "fa-solid fa-eye eye-icon"
                    }
                    onClick={() => {
                      setShowPwd(!showPwd);
                    }}
                  ></i>
                </div>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot your password?
                </Link>
                <button
                  type="submit"
                  name="login"
                  onClick={(e) => handleLogin(e)}
                >
                  {isLoading ? (
                    <i className="fa-solid fa-spinner fa-spin"></i>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>
              <p className="bottom-link">
                Don't have an account yet?{" "}
                <Link to="/register">Create your account</Link>
              </p>
            </>
          )}
          {screen === "verifyEmail" && (
            <form method="post" onSubmit={handleOTPVerify}>
              <div className="input-box">
                <label>OTP</label>
                <input
                  type="text"
                  name="verify-otp"
                  required
                  onChange={(event) => handleOTPChange(event)}
                />
              </div>

              <button type="submit" name="otp-verification">
                {isLoading ? (
                  <i className="fa-solid fa-spinner fa-spin"></i>
                ) : (
                  "Confirm"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
