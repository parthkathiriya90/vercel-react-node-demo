import React, { useState } from "react";
import { userServices } from "../services/user.services";

export default function ChangePass() {
  const [showCurrPwd, setShowCurrPwd] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [pwdErrorMsg, setPwdErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPwd, setCurrentDPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  function clearMessages() {
    setSuccessMsg('');
    setErrorMsg('');
    setPwdErrorMsg('');
    setIsLoading(false);
  }

  function clearFields() {
    setCurrentDPwd('');
    setNewPwd('');
    setConfirmPwd('');
  }

  const handleCurrentPwdChange = (e) => {
    setPwdErrorMsg('');
    setCurrentDPwd(e.target.value);
  }

  const handleNewPwdChange = (e) => {
    setPwdErrorMsg('');
    setNewPwd(e.target.value);
  }

  const handleConfirmPwdChange = (e) => {
    setPwdErrorMsg('');
    setConfirmPwd(e.target.value);
  }

  const handleChangePwd = async (e) => {
    e.preventDefault();
    clearMessages();
    if (currentPwd !== "" && newPwd !== "" && confirmPwd !== "") {
      if (newPwd !== confirmPwd) {
        setPwdErrorMsg("Password must be same.");
      } else {
        let payload = {
          oldPassword: currentPwd,
          password: confirmPwd,
        }
        setIsLoading(true);
        userServices.changePassword(payload).then((result) => {
          if (result.isSuccessful) {
            setSuccessMsg(result.message);
            clearFields();
          } else {
            setSuccessMsg('');
            setErrorMsg(result.message);
          }
          setIsLoading(false);
        }).catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
      }
    }
  }

  return (
    <div className="detail-col">
      <h2>Change Password</h2>
      <form method="post" onSubmit={handleChangePwd}>
        {successMsg && successMsg !== "" &&
          <div className='top-msg success-msg'>
            <p><i className="fa-solid fa-circle-check"></i>{successMsg}</p>
          </div>
        }
        {errorMsg && errorMsg !== "" &&
          <div className='top-msg error-msg'>
            <p><i className="fa-solid fa-circle-xmark"></i>{errorMsg}</p>
          </div>
        }
        <div className="detail-box">
          <div>
            <div className='input-box'>
              <label>Current Password</label>
              <input type={showCurrPwd ? 'text' : 'password'} name='current-pwd' value={currentPwd} required onChange={(event) => handleCurrentPwdChange(event)} />
              <i className={showCurrPwd ? 'fa-solid fa-eye-slash eye-icon' : 'fa-solid fa-eye eye-icon'} onClick={() => {
                setShowCurrPwd(!showCurrPwd);
              }}></i>
            </div>
            <div className="row">
              <div className="col">
                <div className='input-box'>
                  <label>New Password</label>
                  <input type={showPwd ? 'text' : 'password'} name='new-pwd' value={newPwd} required onChange={(event) => handleNewPwdChange(event)} />
                  <i className={showPwd ? 'fa-solid fa-eye-slash eye-icon' : 'fa-solid fa-eye eye-icon'} onClick={() => {
                    setShowPwd(!showPwd);
                  }}></i>
                </div>
              </div>
              <div className="col">
                <div className='input-box'>
                  <label>New Password(Repeat)</label>
                  <input type={showConfirmPwd ? 'text' : 'password'} name='confirm-pwd' value={confirmPwd} required onChange={(event) => handleConfirmPwdChange(event)} />
                  <i className={showConfirmPwd ? 'fa-solid fa-eye-slash eye-icon' : 'fa-solid fa-eye eye-icon'} onClick={() => {
                    setShowConfirmPwd(!showConfirmPwd);
                  }}></i>
                </div>
                {pwdErrorMsg && pwdErrorMsg !== "" && <div className='required'><p className='error-msg'>{pwdErrorMsg}</p></div>}
              </div>
            </div>
          </div>
          <button type='submit' name='forgot-pwd' onClick={(e) => handleChangePwd(e)}>
            {isLoading ? <i className="fa-solid fa-spinner fa-spin"></i> : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}
