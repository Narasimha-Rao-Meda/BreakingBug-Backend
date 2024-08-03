const jwt = require("jsonwebtoken");

const createNewToken = (payload) => {
    return jwt.sign({ userId: payload }, process.env.SECRET_KEY, { expiresIn: '10d' }); // Read Secret name using process.env.SECRET_KEY
}

// Export create New Token function
module.exports = { createNewToken };