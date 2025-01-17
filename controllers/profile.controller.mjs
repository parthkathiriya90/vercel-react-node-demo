import { mapUser } from "../mapping/userMapper.mjs";
import User from "../models/userModel.mjs";

const profileData = async (req, res) => {
  console.log("=> Start get profile process.".yellow);
  try {
    const { userId, email } = req.query;

    console.log(`- Find user profile by email: ${email}`.yellow);
    const profile = await User.find({ email, delete: false });

    // Use the mapper to transform the profile data
    const mappedProfile = mapUser(profile[0]);

    console.log("- Get user profile successfully!".underline.green);
    res.status(200).json({ data: mappedProfile });
  } catch (error) {
    console.error("- Error user profile:".underline.red, error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default {
  profileData,
};
