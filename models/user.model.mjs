import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: false },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    status: { type: String, default: "unAuthenticated" },
    delete: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    isNewUser: { type: Boolean, default: false },
    otp: {
      value: { type: String },
      expired: { type: Date },
      isVerified: { type: Boolean, default: false }
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
