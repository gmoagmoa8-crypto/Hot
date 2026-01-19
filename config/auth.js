// config/auth.js

module.exports = {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: '1h', // token expiration time
};
