require('dotenv').config(); // Load environment variables from the .env file

module.exports = {
  "overrides": [
    {
      "files": ["**/*.js", "**/*.jsx"],
      "rules": {
        // Adjust rules based on the NODE_ENV value from the .env file
        "react-hooks/exhaustive-deps": 'off',  // Disable in production
        "no-unused-vars": 'warn',  // Warn in production
      }
    }
  ]
};
