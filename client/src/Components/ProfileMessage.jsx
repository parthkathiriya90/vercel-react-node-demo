import React from "react";

export default function ProfileMessage() {
  return (
    <>
    <div className="detail-col">
      <h2>Messages</h2>
      <div className="detail-box">
        <div className="table-wrapp">
          <table>
            <thead>
              <th>Subject</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </thead>
            <tbody>
              <tr>
                <td>Order confirmation</td>
                <td>09/01/2025 07:21</td>
                <td className="status">	<span>Inspecting</span></td>
                <td className="detail"><span>Details</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="message-item">
          <img src="./images/customer.png" alt="" className="image" />
          <div className="message-content">
            <h3>Yaprak - Customer Service</h3>
            <p>order get confirmed but did not get follower</p>
            <div className="date-time">09/01/2025 <span>08:10</span></div>
          </div>
        </div>
        <div className="message-item">
          <img src="./images/customer.png" alt="" className="image" />
          <div className="message-content">
            <h3>Yaprak - Customer Service</h3>
            <p>Hello, I am unable to locate your order with the information provided, and I need additional details to assist you better. Could you please share the following information with me? 1. Your order number 2. The email address you used when placing the order Once I receive this information, I can take the necessary steps to resolve your issue. Thank you in advance for your assistance. Have a great day!</p>
            <div className="date-time">09/01/2025 <span>08:10</span></div>
          </div>
        </div>
        <div className="input-box">
            <textarea rows={5} type="text" placeholder="type a message......" />
          </div>
        <button type="submit">New Support Message</button>
      </div>
    </div>

    {/* // new support Messages */}

    {/* <div className="detail-col">
      <h2>New Support Messages</h2>
      <div className="detail-box">
        <div>
          <div className="input-box">
            <label>E-Mail</label>
            <input type="email" placeholder="" />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea rows={5} type="text"  />
          </div>
        </div>
        <button type="submit">Send</button>
      </div>
    </div> */}
    </>
  );
}
