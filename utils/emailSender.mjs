import nodemailer from 'nodemailer'
import { welcomeMailFormat } from "../Template/welcomeEmail.mjs"
import { forgotPasswordFormat } from '../Template/forgotPassword.mjs';
import { otpMailFormat } from '../Template/sendOTP.mjs';
import { resetPasswordSuccessFormat } from '../Template/resetPassword.mjs';

export async function nodemailerConfiguration() {
    return nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });
}

export async function welcomeEmail(email) {
    try {

        const transporter = await nodemailerConfiguration()

        const info = await transporter.sendMail({
            from: `"Parth Kathiriya 👻" ${process.env.EMAIL}`,
            to: email,
            subject: "Welcome to our site.",
            html: welcomeMailFormat(),
        });

        console.log("- Email sent successfully".green);
        return info
    } catch (error) {
        throw new Error(error);
    }
}

export async function forgotPasswordEmail(email, otp) {
    try {
        const transporter = await nodemailerConfiguration()

        const info = await transporter.sendMail({
            from: `${process.env.EMAIL}`,
            to: email,
            subject: "Password change successfully",
            html: resetPasswordSuccessFormat(),
        });

        console.log("- Email sent successfully".green);
        return info
    } catch (error) {
        throw new Error(error);
    }
}

export async function sendOTPEmail(email, otp, isVerified) {
    try {
        const transporter = await nodemailerConfiguration()

        const info = await transporter.sendMail({
            from: `${process.env.EMAIL}`,
            to: email,
            subject: "Verify email OTP",
            html: otpMailFormat(otp),
        });

        console.log("- Email sent successfully".green);
        return info
    } catch (error) {
        throw new Error(error);
    }
}