export const resetPasswordSuccessFormat = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Successful</title>
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
            background-color: #28a745;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            text-align: center;
        }
        .button:hover {
            background-color: #218838;
        }
    </style>
    </head>
    <body>
    <div class="container">
        <h1>Password Reset Successful</h1>
        <p>Hello,</p>
        <p>Your password has been successfully reset. You can now use your new password to log in to your account.</p>
        <p>If you did not initiate this request, please contact support immediately.</p>
        <p>Best regards,<br>Our Site Team</p>
    </div>
    </body>
    </html>`;
};
