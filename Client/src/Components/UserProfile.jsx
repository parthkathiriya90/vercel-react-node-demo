import React, { useEffect, useState } from "react";
import { userServices } from "../services/user.services";

export default function UserProfile() {
  const [userEmail, setUserEmail] = useState("");
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function clearMessages() {
    setSuccessMsg('');
    setErrorMsg('');
    setIsLoading(false);
  }

  useEffect(() => {
    if (profileData == null) {
      setIsLoading(true);
      userServices.getProfile().then((result) => {
        if (result.isSuccessful || result.data) {
          setProfileData(result.data)
          setUserEmail(result?.data?.email);
        } else {
        }
        setIsLoading(false);
      }).catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
    }
  }, []);

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  }

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    clearMessages();
    if (userEmail !== "") {
      let payload = {
        email: userEmail,
      }
      setIsBtnLoading(true);
      userServices.updateProfile(payload).then((result) => {
        if (result.isSuccessful) {
        } else {
          setErrorMsg(result.message);
        }
        setIsBtnLoading(false);
      }).catch((err) => {
        console.log(err);
        setIsBtnLoading(false);
      });
    }
  }

  return (
    <div className="detail-col">
      <h2>Profile</h2>
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
        {!isLoading && <>
          <div>
            <div className="input-box">
              <label>E-Mail</label>
              <input type="email" name="user-email" readOnly  value={userEmail} placeholder="email@email.com" required onChange={(event) => handleEmailChange(event)} />
            </div>
          </div>
          {/* <button type='submit' name='forgot-pwd' onClick={(e) => handleUpdateProfile(e)}>
            {isBtnLoading ? <i className="fa-solid fa-spinner fa-spin"></i> : "Update"}
          </button> */}
        </>}
      </div>
    </div>
  );
}
