export const welcomeMailFormate = (token) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Our Site</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f7f7f7;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333333;
            text-align: center;
            margin-bottom: 30px;
        }
        p {
            color: #666666;
            margin-bottom: 20px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
        }
        .button:hover {
            background-color: #0056b3;
        }
    </style>
    </head>
    <body>
    <div class="container">
       <h1>Welcome to Our Site</h1>
        <p>Hello,</p>
        <p>Thank you for joining our community! To complete your registration, please verify your email address by clicking the button below:</p>
        <p><a class="button" href="${process.env.VERIFY_EMAIL_PATH}${token}">Verify Email Address</a></p>
        <p>If you did not sign up for an account, please ignore this email.</p>
        <p>Best regards,<br>Our Site Team</p>
        </div>
        </body>
        </html>`
}