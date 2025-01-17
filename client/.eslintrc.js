require('dotenv').config(); // Load environment variables from the .env file

module.exports = {
  "overrides": [
    {
      "files": ["**/*.js", "**/*.jsx"],
      "rules": {
        // Adjust rules based on the NODE_ENV value from the .env file
        "react-hooks/exhaustive-deps": process.env.NODE_ENV === 'production' ? 'off' : 'warn',  // Disable in production
        "no-unused-vars": process.env.NODE_ENV === 'production' ? 'warn' : 'error',  // Warn in production
      }
    }
  ]
};