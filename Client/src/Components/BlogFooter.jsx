import React from "react";
import { Link } from "react-router-dom";

export default function BlogFooter() {
  return (
    <>
      <div className="blog-footer">
        <div className="m-container">
          <div className="upper-foot">
            <div className="row">
              <div className="foot-col">
                <h3>😍 Instagram Services</h3>
                <ul>
                  <li>
                    <Link to="##">Buy Instagram Followers</Link>
                  </li>
                  <li>
                    <Link to="##">Buy Instagram Likes</Link>
                  </li>
                  <li>
                    <Link to="##">Buy Instagram Views</Link>
                  </li>
                  <li>
                    <Link to="##">Buy Automatic Likes</Link>
                  </li>
                  <li>
                    <Link to="##">Reels Likes & Views</Link>
                  </li>
                </ul>
              </div>
              <div className="foot-col">
                <h3>🤩 TikTok Services</h3>
                <ul>
                  <li>
                    <Link to="##">Buy TikTok Followers</Link>
                  </li>
                  <li>
                    <Link to="##">Buy TikTok Likes</Link>
                  </li>
                  <li>
                    <Link to="##">Buy TikTok Views</Link>
                  </li>
                  <li>
                    <Link to="##">Buy Facebook Page Likes</Link>
                  </li>
                </ul>
              </div>
              <div className="foot-col">
                <h3>🔥 YouTube Tools</h3>
                <ul>
                  <li>
                    <Link to="##">Buy YouTube Views</Link>
                  </li>
                  <li>
                    <Link to="##">Buy YouTube Subscribers</Link>
                  </li>
                  <li>
                    <Link to="##">Buy YouTube Likes</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="lower-foot">
          <div className="m-container">
            <div className="row">
              <p className="copy-right">© 2025 Famoid Blog - All Rights Reserved.</p>
              <ul className="social-wrap">
                <li><i className="fa-brands fa-facebook-f"></i>facebook</li>
                <li><i className="fa-brands fa-instagram"></i>instahram</li>
                <li><i className="fa-brands fa-youtube"></i>youtube</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
