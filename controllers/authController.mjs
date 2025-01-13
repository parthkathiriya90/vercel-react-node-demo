import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.mjs';
import { sendOTPEmail, welcomeEmail } from '../utils/emailSender.mjs';

const register = async (req, res) => {
    console.log("=> Start registration process.".cyan);
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        console.log("- Your password converted to hash formate.".yellow);

        console.log("- Create new user to user modal.".yellow);
        const newUser = new User({ ...req.body, password: hashedPassword });

        console.log("- Create token for verify user email address.".yellow);
        const token = jwt.sign({ userId: newUser._id, email: newUser.email }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });

        console.log("- Send welcome message for verify email.".yellow);
        await welcomeEmail(newUser.email, token)

        console.log("- Store data in your collection.".yellow);
        await newUser.save();

        console.log("- User registered successfully!".underline.green);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:'.underline.red, error);
        if (error?.code == 11000) {
            res.status(409).json({ message: 'Your email address is already registered!' });
        } else {
            res.status(500).json({ message: 'Internal server error' });
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
            return res.status(404).json({ message: 'User not found' });
        }

        if (!user.isVerified) {
            console.log("- User not verified!".underline.red);
            return res.status(409).json({ message: 'User not verified!', isVerified: false });
        }

        console.log("- Compare your password to founded user.".yellow);
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);

        if (!passwordMatch) {
            console.log("- Your password is invalid!".underline.red);
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        console.log("- Create token for login user.".yellow);
        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET);

        console.log("- Update user status with login.".yellow);
        await User.findOneAndUpdate(
            { _id: user._id },
            { status: "authenticated", otp: { value: null, expired: null } },
        );

        console.log("- User login successfully!".underline.green);
        res.status(200).json({ access_token: token });
    } catch (error) {
        console.error('- Error logging in:'.underline.red, error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const logout = async (req, res) => {
    console.log("=> Start logout process.".yellow);
    const { email } = req.query;

    try {
        console.log("- Find user and update that.".yellow);
        const updatedUser = await User.findOneAndUpdate(
            { email, delete: false },
            { status: 'unAuthenticated', otp: { value: null, expired: null } }
        );

        if (!updatedUser) {
            console.log("- User not found!".underline.red);
            return res.status(404).json({ message: 'User not found' });
        }

        console.log("- User logout successfully!".underline.green);
        res.status(200).json({ message: 'User logout successfully' });
    } catch (error) {
        console.error('- Error logout in:'.underline.red, error);
        res.status(500).json({ message: 'Internal server error' });
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
            return res.status(404).json({ message: 'User not found' });
        }

        console.log("- User verified successfully!".underline.green);
        res.status(200).json({ message: 'Congratulations! Your email address has been successfully verified.' });
    } catch (error) {
        console.error('- Error verify email in:'.underline.red, error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const forgotPassword = async (req, res) => {
    console.log("=> Start forgot password process.".yellow);

    try {
        console.log("- Find your user into our collection.".yellow);
        const user = await User.findOne({ email: req.body.email, delete: false });

        if (!user) {
            console.log("- User not found!".underline.red);
            return res.status(404).json({ message: 'User not found' });
        }

        let otp = Math.floor(Math.random() * 10000);

        console.log("- Add/Update otp in your collection".yellow);
        await User.updateOne(
            { email: user.email },
            { otp: { value: otp, expired: new Date(Date.now() + 600000) } }
        );

        console.log("- Send email for forgot password OTP.".yellow);
        await sendOTPEmail(user.email, otp)

        console.log("- Successfully sent OTP on your email. ".underline.green);
        res.status(200).json({ message: 'Successfully sent OTP on your email.' });
    } catch (error) {
        console.error('- Error forgot password in:'.underline.red, error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const resetPassword = async (req, res) => {
    console.log("=> Start reset password process.".yellow);
    const { otp, email, password } = req.body
    try {
        console.log("- Find your user into our collection.".yellow);
        const user = await User.findOne({ email: email, delete: false });

        console.log("- Check user in collection exist or not".yellow);
        if (!user) {
            console.log("- User not found!".underline.red);
            return res.status(404).json({ message: 'User not found' });
        }

        console.log("- Check OTP with collection match or not".yellow);
        if (user.otp.value !== otp) {
            console.log("- Your OTP is can't match!".underline.red);
            return res.status(409).json({ message: "Your OTP is can't match!" });
        }

        console.log("- Check OTP is expired or not".yellow);
        if (user.otp.expired < new Date()) {
            console.log("- Your OTP is expired!".underline.red);
            return res.status(409).json({ message: 'OTP expired!' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("- Your password converted to hash formate.".yellow);

        console.log("- Remove otp and Reset password in your collection".yellow);
        await User.updateOne(
            { email: user.email },
            { otp: { value: null, expired: null }, password: hashedPassword }
        );

        console.log("- Successfully reset your password".underline.green);
        res.status(200).json({ message: 'Successfully reset your password' });
    } catch (error) {
        console.error('- Error reset password in:'.underline.red, error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export default { register, login, logout, verifyEmail, forgotPassword, resetPassword };
