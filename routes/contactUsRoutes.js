const express = require('express');
const router = express.Router();

const submitContactForm = (req, res) => res.send('Contact form submitted');

router.post('/', submitContactForm);

module.exports = router;
