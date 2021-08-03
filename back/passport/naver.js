const passport = require('passport');
const { Strategy: NaverStrategy } = require('passport-naver');
const { User } = require('../models');

module.exports = () => {
  passport.use(
    new NaverStrategy(
      {
        clientID: process.env.NAVER_ID,
        clientSecret: process.env.NAVER_SECRET,
        callbackURL: '/user/naver/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log('🔥🔥🔥🔥🔥🔥🔥naver profile🔥🔥🔥🔥🔥🔥🔥', profile);
        try {
          const exUser = await User.findOne({
            where: { snsId: profile.id, provider: 'naver' },
          });
          if (exUser) {
            done(null, exUser);
          } else {
            const newUser = await User.create({
              // email:  profile.emails[0].value,
              // snsId: profile.id,
              // provider: 'naver',
              email: profile._json && profile._json.email,
              snsId: profile.id,
              provider: profile.provider,
            });
            done(null, newUser);
          }
        } catch (error) {
          console.log(error);
          done(error);
        }
      },
    ),
  );
};
