import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    qty: { type: Number, required: true },
    discount: { type: String },
    paymentStatus: { type: String, default: 'Processing', enum: ['Processing', 'Cancel', 'In-Progress', 'Partial', 'Completed'] },
    amount: { type: Number, required: true },
    serviceId: { type: String, required: true },
    orderId: { type: String, required: true },
    userId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    serviceName: { type: String, required: true },
    serviceType: { type: String, required: true }
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
