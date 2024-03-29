const express = require('express');
const {register, login, getMe, forgotPassword, resetPassword, updateDetails, updatePassword, logout} = require('../controllers/auth')

const router = express.Router();

const { protect, authorize } = require('../middleware/auth')

router.post('/register', register);
router.post('/login', login);
router.post('/forgot', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);
router.put('/updatedetails', protect, updateDetails);
router.put('/updatepassword', protect, updatePassword);
router.get('/me', protect, getMe);
router.get('/logout', logout)
module.exports = router;