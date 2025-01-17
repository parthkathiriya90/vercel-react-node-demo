import React, { useEffect, useState } from "react";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // API Response
  const apiResponse = {
    successful: true,
    data: [
      {
        quantity: 200,
        discount: "10",
        paymentStatus: "Complete",
        amount: 3.92,
        serviceId: "678",
        serviceName: "Buy Instagram Followers",
        orderDate: "2025-01-15T04:27:01.623+00:00",
      },
      {
        quantity: 100,
        discount: "10",
        paymentStatus: "Processing",
        amount: 3.92,
        serviceId: "678",
        serviceName: "Buy Instagram Likes",
        orderDate: "2025-01-15T04:27:01.623+00:00",
      },
      {
        quantity: 150,
        discount: "20",
        paymentStatus: "Cancel",
        amount: 3.92,
        serviceId: "678",
        serviceName: "Buy Instagram Subscribers",
        orderDate: "2025-01-16T04:27:01.623+00:00",
      },
      {
        quantity: 150,
        discount: "20",
        paymentStatus: "Cancel",
        amount: 3.92,
        serviceId: "678",
        serviceName: "Buy Instagram Subscribers",
        orderDate: "2025-01-16T04:27:01.623+00:00",
      },
      {
        quantity: 500,
        discount: "30",
        paymentStatus: "Complete",
        amount: 20.5,
        serviceId: "678",
        serviceName: "Buy Instagram Viewers",
        orderDate: "2025-01-16T04:27:01.623+00:00",
      },
    ],
  };

  const OrderHistory = async () => {

    try {
      if (apiResponse.successful) {
        const fetchedOrders = apiResponse.data;
        setOrders(fetchedOrders);
        const PendingOrders = fetchedOrders.some(
          (order) =>
            order.paymentStatus !== "Complete" &&
            order.paymentStatus !== "Cancel"
        );

        if (PendingOrders) {
          await updateOrderStatus();
        }
      } else {
        console.error("Failed to fetch orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateOrderStatus = async () => {
    try {
      console.log("Updating order status");
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  useEffect(() => {
    OrderHistory();
  }, []);

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
                    <td>{new Date(order.orderDate).toLocaleDateString('en-GB')}</td>
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
