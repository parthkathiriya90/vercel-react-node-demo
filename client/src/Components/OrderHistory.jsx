import React, { useEffect, useState } from "react";
import { authServices } from "../services/auth.services";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    OrderHistory();
  }, []);

  const OrderHistory = async () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoading(true);
      authServices
        .orderHistory()
        .then((result) => {
          if (result.isSuccessful) {
            const fetchedOrders = result.data;
            setOrders(fetchedOrders);
            const PendingOrders = fetchedOrders.some(
              (order) =>
                order.paymentStatus !== "Completed" &&
                order.paymentStatus !== "Cancel"
            );

            if (PendingOrders) {
              updateOrderStatus(fetchedOrders.serviceId, "Completed");
            } else {
            }
            setIsLoading(false);
          } else {
            console.error("Failed to fetch orders");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      console.error("Token not found. Please log in.");
      return;
    }
    try {
      const result = await fetch(
        "http://localhost:3001/api/order/update-status",
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderId,
            status: newStatus,
          }),
        }
      );
      if (!result.ok) {
        throw new Error(`Error with status code: ${result.status}`);
      }
      const data = await result.json();
      setOrders(data)
      console.log(data)
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };


  

  return (
    <div className="detail-col">
      <h2>Order History</h2>
      <div className="detail-box">
        <div className="table-wrapp">
          <table>
            <thead>
              <tr>
                <th>Order Number</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Service Name</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="6">Loading orders...</td>
                </tr>
              ) : orders.length > 0 ? (
                orders.map((order, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{order.quantity}</td>
                    <td>${order.amount.toFixed(2)}</td>
                    <td>
                      {new Date(order.orderDate).toLocaleDateString("en-GB")}
                    </td>
                    <td>{order.paymentStatus}</td>
                    <td>{order.serviceName}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">
                    <div className="no-data">You have no orders yet.</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <button type="submit">New Support Message</button>
      </div>
    </div>
  );
}
