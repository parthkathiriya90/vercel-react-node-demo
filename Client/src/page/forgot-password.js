import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authServices } from "../services/auth.services";
import { Link } from "react-router-dom";

export default function ForgotPass() {
  const [userEmail, setUserEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [pwdErrorMsg, setPwdErrorMsg] = useState("");
  const [screen, setScreen] = useState("forgotPwd");
  const [isLoading, setIsLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();

  function clearMessages() {
    setSuccessMsg("");
    setErrorMsg("");
    setPwdErrorMsg("");
    setIsLoading(false);
  }

  const handleForgotEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    clearMessages();
    if (userEmail !== "") {
      let payload = {
        email: userEmail,
      };
      setIsLoading(true);
      authServices
        .forgotPwd(payload)
        .then((result) => {
          if (result.isSuccessful) {
            console.log(result);
            setSuccessMsg(result.message);
            setScreen("verifyEmail");
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

  const handleOTPChange = (e) => {
    clearMessages();
    setOTP(e.target.value);
  };

  const handleOTPSubmit = async (e) => {
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
            setSuccessMsg(result.message);
            setScreen("resetPwd");
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

  const handleNewPwdChange = (e) => {
    setPwdErrorMsg("");
    setNewPwd(e.target.value);
  };

  const handleConfirmPwdChange = (e) => {
    setPwdErrorMsg("");
    setConfirmPwd(e.target.value);
  };

  const handleResetPwdSubmit = async (e) => {
    e.preventDefault();
    clearMessages();
    if (newPwd !== "" && confirmPwd !== "") {
      if (newPwd !== confirmPwd) {
        setPwdErrorMsg("Password must be same.");
      } else {
        let payload = {
          email: userEmail,
          password: confirmPwd,
        };
        setIsLoading(true);
        authServices
          .resetPassword(payload)
          .then((result) => {
            if (result.isSuccessful) {
              setSuccessMsg(result.message);
              setScreen("resetPwd");
            } else {
              setSuccessMsg("");
              setErrorMsg(result.message);
            }
            setIsLoading(false);
            setTimeout(() => {
              navigate("/login");
            }, 1000);
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false);
          });
      }
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
            console.log(result);
            setSuccessMsg(result.message);
            setScreen("verifyEmail");
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
      <div
        className={`login-wrapp${screen !== "resetPwd" ? " forgot-pass" : ""}`}
      >
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
          {screen === "forgotPwd" && (
            <form method="post" onSubmit={handleForgotSubmit}>
              <div className="input-box">
                <label>Email</label>
                <input
                  type="email"
                  name="user-email"
                  required
                  onChange={(event) => handleForgotEmailChange(event)}
                />
              </div>
              <button
                type="submit"
                name="forgot-pwd"
                onClick={(e) => handleForgotSubmit(e)}
              >
                {isLoading ? (
                  <i className="fa-solid fa-spinner fa-spin"></i>
                ) : (
                  "Verify Email"
                )}
              </button>
            </form>
          )}
          {screen === "verifyEmail" && (
            <form method="post" onSubmit={handleOTPSubmit}>
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
              <button
                type="submit"
                name="otp-verification"
                onClick={(e) => handleOTPSubmit(e)}
              >
                {isLoading ? (
                  <i className="fa-solid fa-spinner fa-spin"></i>
                ) : (
                  "Confirm"
                )}
              </button>
            </form>
          )}
          {screen === "resetPwd" && (
            <form method="post" onSubmit={handleResetPwdSubmit}>
              <div className="input-box">
                <label>New Password</label>
                <input
                  type={showPwd ? "text" : "password"}
                  name="new-pwd"
                  required
                  onChange={(event) => handleNewPwdChange(event)}
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
              <div className="input-box">
                <label>Confirm Password</label>
                <input
                  type={showConfirmPwd ? "text" : "password"}
                  name="confirm-pwd"
                  required
                  onChange={(event) => handleConfirmPwdChange(event)}
                />
                <i
                  className={
                    showConfirmPwd
                      ? "fa-solid fa-eye-slash eye-icon"
                      : "fa-solid fa-eye eye-icon"
                  }
                  onClick={() => {
                    setShowConfirmPwd(!showConfirmPwd);
                  }}
                ></i>
              </div>
              {pwdErrorMsg && pwdErrorMsg !== "" && (
                <div className="required">
                  <p className="error-msg">{pwdErrorMsg}</p>
                </div>
              )}
              <button
                type="submit"
                name="forgot-pwd"
                onClick={(e) => handleResetPwdSubmit(e)}
              >
                {isLoading ? (
                  <i className="fa-solid fa-spinner fa-spin"></i>
                ) : (
                  "Reset Password"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
