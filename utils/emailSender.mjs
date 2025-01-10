import nodemailer from 'nodemailer'
import { welcomeMailFormate } from "../Template/welcomeEmail.mjs"
import { forgotPasswordFormat } from '../Template/forgotPassword.mjs';

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

export async function welcomeEmail(email, token) {
    try {

        const transporter = await nodemailerConfiguration()

        const info = await transporter.sendMail({
            from: `"Parth Kathiriya 👻" ${process.env.EMAIL}`,
            to: email,
            subject: "Welcome to our site.",
            html: welcomeMailFormate(token),
        });

        console.log("- Email sent successfully".green);
        return info
    } catch (error) {
        throw new Error(error);
    }
}

export async function sendOTPEmail(email, otp) {
    try {
        const transporter = await nodemailerConfiguration()

        const info = await transporter.sendMail({
            from: `${process.env.EMAIL}`,
            to: email,
            subject: "Forgot Password OTP",
            html: forgotPasswordFormat(otp),
        });

        console.log("- Email sent successfully".green);
        return info
    } catch (error) {
        throw new Error(error);
    }
}