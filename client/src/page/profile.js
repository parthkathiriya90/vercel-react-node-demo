import React, { useState} from "react";
import UserProfile from "../Components/UserProfile";
import ChangePass from "../Components/ChangePass";
import ProfileMessage from "../Components/ProfileMessage";
import OrderHistory from "../Components/OrderHistory";
import { useNavigate } from "react-router-dom";
import { authServices } from "../services/auth.services";

export default function Profile() {
  const [active, Setactive] = useState("1");
  const navigate = useNavigate();
  const Tabclick = (value) => {
    Setactive(value);
  };

  const handleLogout = () => {
    authServices
      .logout()
      .then((result) => {
        if (result.isSuccessful) {
          localStorage.removeItem("accessToken", result.access_token);
          navigate("/login");         
        } else {
          console.log(result.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="profile-page p-6">
        <div className="s-container">
          <div className="content-row">
            <div className="menu-list">
              <h1>username</h1>
              <ul>
                <li
                  className={`${active === "1" ? "active" : ""}`}
                  onClick={() => Tabclick("1")}
                >
                  profile
                </li>
                <li
                  className={`${active === "2" ? "active" : ""}`}
                  onClick={() => Tabclick("2")}
                >
                  messages
                </li>
                <li
                  className={`${active === "3" ? "active" : ""}`}
                  onClick={() => Tabclick("3")}
                >
                  order history
                </li>
                <li
                  className={`${active === "4" ? "active" : ""}`}
                  onClick={() => Tabclick("4")}
                >
                  change password
                </li>
                <li onClick={handleLogout}>logout</li>
              </ul>
            </div>
            {/* --------------- right content */}
            {active === "1" && <UserProfile />}
            {active === "2" && <ProfileMessage />}
            {active === "3" && <OrderHistory />}
            {active === "4" && <ChangePass />}
          </div>
        </div>
      </div>
    </>
  );
}
