import { mapUser, mapUserList } from "../mapping/userMapper.mjs";
import User from "../models/userModel.mjs";

const userList = async (req, res) => {
  console.log("=> Start get user process.".yellow);
  try {
    console.log("- Find users".yellow);
    const user = await User.find({ delete: false });

    // Use the mapper to transform the profile data
    const mappedUsers = mapUserList(user);

    console.log("- Get user list successfully!".underline.green);
    res.status(200).json({ data: mappedUsers });
  } catch (error) {
    console.error("- Error user listing:".underline.red, error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const userByEmail = async (req, res) => {
  console.log("=> Start get user by email process.".yellow);
  try {
    console.log("- Find user by email".yellow);
    const user = await User.findOne({ email: req.query.email, delete: false });

    if (!user) {
      console.log("- User not found!".underline.red);
      return res.status(404).json({ message: "User not found" });
    }

    // Use the mapper to transform the profile data
    const mappedUser = mapUser(user);

    console.log("- Get user by email successfully!".underline.green);
    res.status(200).json({ data: mappedUser });
  } catch (error) {
    console.error("- Error user listing:".underline.red, error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateUser = async (req, res) => {
  console.log("=> Start user update process.".yellow);
  const { userId } = req.query;
  const updates = req.body;

  try {
    console.log("- Find user data and update that.".yellow);
    const updatedUser = await User.updateOne(
      { _id: userId, delete: false },
      updates
    );

    if (!updatedUser) {
      console.log("- User not found!".underline.red);
      return res.status(404).json({ message: "User not found" });
    }

    console.log("- Update user successfully!".underline.green);
    res.status(200).json({ message: "Update user successfully!" });
  } catch (error) {
    console.error("- Server error:".underline.red, error);
    res.status(500).json({ message: "Server error" });
  }
};

const restoreDeletedUserById = async (req, res) => {
  console.log("=> Start user restore process.".yellow);
  const { id } = req.params;

  try {
    console.log("- Find user data and restore that.".yellow);
    const updatedUser = await User.updateOne({ _id: id }, { delete: false });

    if (!updatedUser) {
      console.log("- User not found!".underline.red);
      return res.status(404).json({ message: "User not found" });
    }

    console.log("- User restore successfully!".underline.green);
    res.status(200).json({ message: "User restore successfully!" });
  } catch (error) {
    console.error("- Server error:".underline.red, error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateUserById = async (req, res) => {
  console.log("=> Start user update by id process.".yellow);
  const { id } = req.params;
  const updates = req.body;

  try {
    console.log("- Find user data and update that.".yellow);
    const updatedUser = await User.updateOne(
      { _id: id, delete: false },
      updates
    );

    if (!updatedUser) {
      console.log("- User not found!".underline.red);
      return res.status(404).json({ message: "User not found" });
    }

    console.log("- Update user successfully!".underline.green);
    res.status(200).json({ message: "Update user successfully!" });
  } catch (error) {
    console.error("- Server error:".underline.red, error);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteUser = async (req, res) => {
  console.log("=> Start user delete process.".yellow);
  const { userId } = req.query;

  try {
    console.log("- Find user data and delete that.".yellow);
    const updatedUser = await User.updateOne(
      { _id: userId, status: "unAuthenticated" },
      { delete: true }
    );

    if (!updatedUser) {
      console.log("- User not found!".underline.red);
      return res.status(404).json({ message: "User not found" });
    }

    console.log("- Delete user successfully!".underline.green);
    res.status(200).json({ message: "Delete user successfully!" });
  } catch (error) {
    console.error("- Server error:".underline.red, error);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteUserByIds = async (req, res) => {
  console.log("=> Start user delete by id process.".yellow);
  const { id } = req.params;

  try {
    console.log("- Find user data and delete that.".yellow);
    const updatedUser = await User.updateMany(
      { _id: { $in: id.split(",") }, status: "unAuthenticated" },
      { delete: true }
    );

    if (!updatedUser) {
      console.log("- User not found!".underline.red);
      return res.status(404).json({ message: "User not found" });
    }

    console.log("- Delete user successfully!".underline.green);
    res.status(200).json({ message: "Delete user successfully!" });
  } catch (error) {
    console.error("- Server error:".underline.red, error);
    res.status(500).json({ message: "Server error" });
  }
};

const deletedUser = async (req, res) => {
  console.log("=> Start get deleted user process.".yellow);
  try {
    console.log("- Find deleted users".yellow);
    const user = await User.find({ delete: true });

    // Use the mapper to transform the profile data
    const mappedUsers = mapUserList(user);

    console.log("- Get deleted user list successfully!".underline.green);
    res.status(200).json({ data: mappedUsers });
  } catch (error) {
    console.error("- Error deleted user listing:".underline.red, error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default {
  userList,
  userByEmail,
  updateUser,
  updateUserById,
  deleteUser,
  deleteUserByIds,
  deletedUser,
  restoreDeletedUserById,
};
