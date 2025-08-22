// const express = require('express');
// const router = express.Router();
// const { registerUser, loginUser } = require('../controllers/authController');

// router.post('/register', registerUser);
// router.post('/login', loginUser);

// module.exports = router;


const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const validateStringFields = require('../middleware/validateStringFields');

// Register route with string validation
router.post(
  '/register',
  validateStringFields(['username', 'password', 'email']),
  registerUser
);

// Login route with string validation
router.post(
  '/login',
  validateStringFields(['username', 'password']),
  loginUser
);

module.exports = router;
