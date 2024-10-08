const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/', authController.isLoggedIn, viewsController.landing);
router.get(
  '/contact',
  authController.isLoggedIn,
  viewsController.getContactPage);

router.get(
  '/about',
  authController.isLoggedIn,
  viewsController.getAboutPage);

router.get(
  '/postJob',
  authController.protect,
  authController.isLoggedIn,
 viewsController.getPostjobPage);

router.get(
  '/overview',
  authController.protect,
  authController.isLoggedIn,
  viewsController.getOverview
);

router.get(
  '/job',
  authController.protect,
  authController.isLoggedIn,
  viewsController.jobDetail
);

router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);

router.get('/signup', authController.isLoggedIn, viewsController.getSignupForm);

router.get(
  '/forgotPassword',
  authController.isLoggedIn,
  viewsController.getForgotPasswordForm
);

router.get(
  '/account',
  authController.protect,
  authController.isLoggedIn,
  viewsController.getAccountPage
);

router.get(
  '/resetPassword',
  authController.isLoggedIn,
  viewsController.getResetPaswordForm
);

router.post(
  '/submit-user-data',
  authController.protect,
  authController.isLoggedIn,
  viewsController.updateUserData
);

module.exports = router;
