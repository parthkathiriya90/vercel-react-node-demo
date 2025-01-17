import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authServices } from "../services/auth.services";
import { Link } from "react-router-dom";

export default function Register() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [otp, setOtp] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [screen, setScreen] = useState("register");
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleOTPChange = (e) => {
    setOtp(e.target.value)
  }

  const clearMessages = () => {
    setErrorMsg("")
    setSuccessMsg("")
    setIsLoading(false)
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    clearMessages()
    if ((userEmail !== "") & (password !== "")) {
      let payload = {
        email: userEmail,
        password: password,
      };
      setIsLoading(true);
      authServices
        .register(payload)
        .then((result) => {
          if (result.isSuccessful) {
            setScreen("verifyEmail")
            setIsLoading(false)
            setSuccessMsg(result.message)
            console.log(result);
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
    clearMessages()
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
            console.log(result)
            setSuccessMsg(result.message)
            navigate("/login");
          }
          else {
            setIsLoading(false);
            setErrorMsg(result.message)
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  };

  const handleResendOTP = async (e) => {
    e.preventDefault();
    clearMessages()
    if (userEmail !== "") {
      let payload = {
        email: userEmail,
      };
      setIsLoading(true);
      authServices
        .resendOTP(payload)
        .then((result) => {
          if (result.isSuccessful) {
            console.log(result);
            setSuccessMsg(result.message);
            setIsLoading(false);
            setTimer(59);
            setIsButtonDisabled(true);
          } else {
            setSuccessMsg("");
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

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsButtonDisabled(false);
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <>
      <div className="login-wrapp">
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

          {screen === "register" && (
            <>
              <form onSubmit={handleRegister}>
                <div className="input-box">
                  <label>Email</label>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => handleEmailChange(e)}
                    required
                  />
                </div>
                <div className="input-box">
                  <label>Password</label>
                  <input
                    type={showPwd ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => handlePasswordChange(e)}
                    required
                  />
                  <i className={showPwd ? 'fa-solid fa-eye-slash eye-icon' : 'fa-solid fa-eye eye-icon'} onClick={() => {
                    setShowPwd(!showPwd);
                  }}></i>

                </div>
                <div className="requried">
                  <p className="accept-terms">
                    {" "}
                    <input type="checkbox" className="checkbox" />I accept the
                    terms of User Agreement
                  </p>
                  {/* <p className='error-msg'>Agreement must be accepted.</p> */}
                </div>
                <button type="submit">
                  {isLoading ? (
                    <i className="fa-solid fa-spinner fa-spin"></i>
                  ) : (
                    "Register"
                  )}
                </button>
              </form>

              <p className="bottom-link">
                Already have an account? <Link to="/login">Login</Link>
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

              <p className="resend-link">
                Didn't receive the OTP?{" "}
                <Link to="#" onClick={(e) => (isButtonDisabled ? e.preventDefault() : handleResendOTP(e))}>Resend</Link>{" "}
                <span className="counter">(00:{timer})</span>
              </p>

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
