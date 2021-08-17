const slowDown = require('express-slow-down');
exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('로그인을 해주세요.');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('로그인한 상태입니다.');
  }
};

exports.speedLimiter = slowDown({
  windowMs: 5000, // 15 minutes
  delayAfter: 1, // allow 100 requests per 15 minutes, then...
  delayMs: 5000, // begin adding 500ms of delay per request above 100:
});
//rate limit
