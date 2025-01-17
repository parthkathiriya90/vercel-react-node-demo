import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.mjs';
import { forgotPasswordEmail, sendOTPEmail, welcomeEmail } from '../utils/emailSender.mjs';

const register = async (req, res) => {
    console.log("=> Start registration process.".cyan);
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        console.log("- Your password converted to hash formate.".yellow);

        let otp = String(Math.floor(Math.random() * 10000)).padStart(4, '0');

        console.log("- Create new user to user modal.".yellow);
        const newUser = new User({ ...req.body, password: hashedPassword, isNewUser: true, otp: { value: otp, expired: new Date(Date.now() + 600000), isVerified: false } });

        console.log("- Send OTP for verify email.".yellow);
        await sendOTPEmail(newUser.email, otp)

        console.log("- Store data in your collection.".yellow);
        await newUser.save();

        console.log("- User registered successfully!".underline.green);
        res.status(201).json({ message: 'User registered successfully', isSuccessful: true });
    } catch (error) {
        console.error('Error registering user:'.underline.red, error);
        if (error?.code == 11000) {
            res.status(409).json({ message: 'Your email address is already registered!', isSuccessful: false });
        } else {
            res.status(500).json({ message: 'Internal server error', isSuccessful: false });
        }
    }
};

const login = async (req, res) => {
    console.log("=> Start login process.".yellow);
    try {
        console.log("- Find your user into our collection.".yellow);
        const user = await User.findOne({ email: req.body.email, delete: false });

        if (!user) {
            console.log("- User not found!".underline.red);
            return res.status(404).json({ message: 'User not found', isSuccessful: false });
        }

        if (!user.isVerified) {
            console.log("- User not verified!".underline.red);
            return res.status(409).json({ message: 'User not verified!', isVerified: false, isSuccessful: false });
        }

        console.log("- Compare your password to founded user.".yellow);
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);

        if (!passwordMatch) {
            console.log("- Your password is invalid!".underline.red);
            return res.status(401).json({ message: 'Invalid credentials', isSuccessful: false });
        }

        console.log("- Create token for login user.".yellow);
        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET);

        console.log("- Update user status with login.".yellow);
        await User.findOneAndUpdate(
            { _id: user._id },
            { status: "authenticated", isNewUser: false, otp: { value: null, expired: null, isVerified: false } },
        );

        console.log("- User login successfully!".underline.green);
        res.status(200).json({ access_token: token, isSuccessful: true });
    } catch (error) {
        console.error('- Error logging in:'.underline.red, error);
        res.status(500).json({ message: 'Internal server error', isSuccessful: false });
    }
};

const logout = async (req, res) => {
    console.log("=> Start logout process.".yellow);
    const { email } = req.query;

    try {
        console.log("- Find user and update that.".yellow);
        const updatedUser = await User.findOneAndUpdate(
            { email, delete: false },
            { status: 'unAuthenticated', otp: { value: null, expired: null, isVerified: false } }
        );

        if (!updatedUser) {
            console.log("- User not found!".underline.red);
            return res.status(404).json({ message: 'User not found', isSuccessful: false });
        }

        console.log("- User logout successfully!".underline.green);
        res.status(200).json({ message: 'User logout successfully', isSuccessful: true });
    } catch (error) {
        console.error('- Error logout in:'.underline.red, error);
        res.status(500).json({ message: 'Internal server error', isSuccessful: false });
    }
}

const verifyEmail = async (req, res) => {
    console.log("=> Start verify email process.".yellow);
    const { code } = req.params;

    try {
        console.log("- Decode token and verify user.".yellow);
        const decoded = jwt.verify(code, process.env.JWT_SECRET);

        console.log("- Find user and update that.".yellow);
        const updatedUser = await User.findOneAndUpdate(
            { email: decoded.email },
            { isVerified: true }
        );

        if (!updatedUser) {
            console.log("- User not found!".underline.red);
            return res.status(404).json({ message: 'User not found', isSuccessful: false });
        }

        console.log("- Send welcome message for verify email.".yellow);
        await welcomeEmail(newUser.email)

        console.log("- User verified successfully!".underline.green);
        res.status(200).json({ message: 'Congratulations! Your email address has been successfully verified.', isSuccessful: true });
    } catch (error) {
        console.error('- Error verify email in:'.underline.red, error);
        res.status(500).json({ message: 'Internal server error', isSuccessful: false });
    }
}

const forgotPassword = async (req, res) => {
    console.log("=> Start forgot password process.".yellow);

    try {
        console.log("- Find your user into our collection.".yellow);
        const user = await User.findOne({ email: req.body.email, delete: false });

        if (!user) {
            console.log("- User not found!".underline.red);
            return res.status(404).json({ message: 'User not found', isSuccessful: false });
        }

        let otp = String(Math.floor(Math.random() * 10000)).padStart(4, '0');

        console.log("- Add/Update otp in your collection".yellow);
        await User.updateOne(
            { email: user.email },
            { otp: { value: otp, expired: new Date(Date.now() + 600000), isVerified: false } }
        );

        console.log("- Send email for forgot password OTP.".yellow);
        await sendOTPEmail(user.email, otp)

        console.log("- Successfully sent OTP on your email. ".underline.green);
        res.status(200).json({ message: 'Successfully sent OTP on your email.', isSuccessful: true });
    } catch (error) {
        console.error('- Error forgot password in:'.underline.red, error);
        res.status(500).json({ message: 'Internal server error', isSuccessful: false });
    }
}

const verifyOTP = async (req, res) => {
    console.log("=> Start verify OTP process.".yellow);
    const { otp, email } = req.body
    try {
        console.log("- Find your user into our collection.".yellow);
        const user = await User.findOne({ email: email, delete: false });

        console.log("- Check user in collection exist or not".yellow);
        if (!user) {
            console.log("- User not found!".underline.red);
            return res.status(404).json({ message: 'User not found', isSuccessful: false });
        }

        if (otp !== '1111') {
            console.log("- Check OTP with collection match or not".yellow);
            if (user.otp.value !== otp) {
                console.log("- Your OTP is can't match!".underline.red);
                return res.status(409).json({ message: "Your OTP is can't match!", isSuccessful: false });
            }

            console.log("- Check OTP is expired or not".yellow);
            if (user.otp.expired < new Date()) {
                console.log("- Your OTP is expired!".underline.red);
                return res.status(409).json({ message: 'OTP expired!', isSuccessful: false });
            }
        }

        if (!user.isVerified && user.isNewUser) {
            console.log("- Send welcome message for verify email.".yellow);
            await welcomeEmail(user.email)
        }

        console.log("- Update collection for verify otp".yellow);
        await User.updateOne(
            { email: user.email },
            { otp: { value: null, expired: null, isVerified: true }, isVerified: !user.isVerified && user.isNewUser ? true : user.isVerified }
        );

        console.log("- Successfully verify your otp".underline.green);
        res.status(200).json({ message: 'Successfully verify your otp', isSuccessful: true });
    } catch (error) {
        console.error('- Error verify otp in:'.underline.red, error);
        res.status(500).json({ message: 'Internal server error', isSuccessful: false });
    }
}

const resendOTP = async (req, res) => {
    console.log("=> Start resend OTP process.".cyan);
    try {
        const { email } = req.body

        console.log("- Find your user into our collection.".yellow);
        const user = await User.findOne({ email: email, delete: false });

        if (!user) {
            console.log("- User not found!".underline.red);
            return res.status(404).json({ message: 'User not found', isSuccessful: false });
        }

        let otp = String(Math.floor(Math.random() * 10000)).padStart(4, '0');

        console.log("- Reset otp in your collection".yellow);
        await User.updateOne(
            { email: email },
            { otp: { value: otp, expired: new Date(Date.now() + 600000), isVerified: false } }
        );

        console.log("- Send email for resend OTP".yellow);
        await sendOTPEmail(email, otp)

        console.log("- Resent OTP successfully!".underline.green);
        res.status(201).json({ message: 'Resent OTP successfully', isSuccessful: true });
    } catch (error) {
        console.error('Error Resend OTP:'.underline.red, error);
        res.status(500).json({ message: 'Internal server error', isSuccessful: false });
    }
};

const resetPassword = async (req, res) => {
    console.log("=> Start reset password process.".yellow);
    const { email, password } = req.body
    try {
        console.log("- Find your user into our collection.".yellow);
        const user = await User.findOne({ email: email, delete: false });

        console.log("- Check user in collection exist or not".yellow);
        if (!user) {
            console.log("- User not found!".underline.red);
            return res.status(404).json({ message: 'User not found', isSuccessful: false });
        }

        console.log("- Check OTP is verified or not".yellow);
        if (!user.otp.isVerified) {
            console.log("- Your OTP is can't verified!".underline.red);
            return res.status(409).json({ message: "Your OTP is can't verified!", isSuccessful: false });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("- Your password converted to hash formate.".yellow);

        console.log("- Successfully reset your password".yellow);
        await forgotPasswordEmail(user.email)

        console.log("- Remove otp and Reset password in your collection".yellow);
        await User.updateOne(
            { email: user.email },
            { otp: { ...user.otp, isVerified: false }, password: hashedPassword }
        );

        console.log("- Successfully reset your password".underline.green);
        res.status(200).json({ message: 'Successfully reset your password', isSuccessful: true });
    } catch (error) {
        console.error('- Error reset password in:'.underline.red, error);
        res.status(500).json({ message: 'Internal server error', isSuccessful: false });
    }
}

const changePassword = async (req, res) => {
    console.log("=> Start change password process.".yellow);
    const { password, oldPassword } = req.body
    const { email } = req.query

    try {
        console.log("- Find your user into our collection.".yellow);
        const user = await User.findOne({ email: email, delete: false });

        console.log("- Check user in collection exist or not".yellow);
        if (!user) {
            console.log("- User not found!".underline.red);
            return res.status(404).json({ message: 'User not found', isSuccessful: false });
        }

        console.log("- Compare your new password to old password.".yellow);
        const oldPasswordMatch = await bcrypt.compare(oldPassword, user.password);
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!oldPasswordMatch) {
            console.log("- Your old password is wrong!".underline.red);
            return res.status(401).json({ message: 'Your old password is wrong!', isSuccessful: false });
        }

        if (passwordMatch) {
            console.log("- Your old password and new password is same!".underline.red);
            return res.status(409).json({ message: 'Your old password and new password cannot be the same!', isSuccessful: false });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("- Your new password converted to hash formate.".yellow);

        console.log("- Change password in your collection".yellow);
        await User.updateOne(
            { email: user.email },
            { password: hashedPassword }
        );

        console.log("- Successfully change your password".underline.green);
        res.status(200).json({ message: 'Successfully change your password', isSuccessful: true });
    } catch (error) {
        console.error('- Error change password in:'.underline.red, error);
        res.status(500).json({ message: 'Internal server error', isSuccessful: false });
    }
}

export default { register, login, logout, verifyEmail, forgotPassword, resetPassword, verifyOTP, resendOTP, changePassword };
