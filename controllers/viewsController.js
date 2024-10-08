const Job = require('../models/jobModel');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// exports.getOverview = catchAsync( async(req, res, next) => {
//   // Get Job data from collection
//   const jobs = await Job.find();
//   // Build template
//   // Render that temlate using job data
//   res.status(200).render('overview', {
//     title: 'Jobs',
//     jobs
//   })
// })

exports.landing =  (req, res) => {
  res.status(200).render('landingPage');
}

exports.jobDetail = catchAsync(async(req, res, next) => {
  // 1) Get the data for the requested job
  const job = await Job.findOne({slug: req.params.slug});
  if(!job) {
    return next(new AppError('There is no job with that name.', 404));
  }
  // 2) Build template
  // 3) Render the template using data from 1
  res.status(200).render('job', {
    title: `${job.name}`,
    job
  })
});


exports.getAboutPage = (req, res) => {
  res.status(200).render('about', {
    title: 'about us'
  });
}

exports.getContactPage = (req, res) => {
  res.status(200).render('contact', {
    title: 'contact us'
  });
}

exports.getPostjobPage = (req, res) => {
  res.status(200).render('postJob', {
    title: 'Post Job'
  });
}

exports.getOverview = (req, res) => {
  res.status(200).render('overview', {
    title: 'my Jobs'
  });
}

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'login'
  });
}

exports.getSignupForm = (req, res) => {
  res.status(200).render('signup', {
    title: 'Signup'
  });
}

exports.getForgotPasswordForm = (req, res) => {
  res.status(200).render('forgotPassword');
}

exports.getAccountPage = (req, res) => {
  res.status(200).render('account');
}

exports.getResetPaswordForm = (req, res) => {
  res.status(200).render('resetPassword');
}


exports.updateUserData = catchAsync(async(req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(req.user.id, {
    name: req.body.name,
    email: req.body.email
  },{
    new: true,
    runValidators: true
  }
  );
  res.status(200).render('account', {
    title: 'Your account',
    user: updatedUser
  });

})
