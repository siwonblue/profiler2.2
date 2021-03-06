const passport = require('passport');
const { Strategy: KakaoStrategy } = require('passport-kakao');

const { User } = require('../models');

module.exports = () => {
  passport.use(
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_ID,
        callbackURL: '/user/kakao/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const exUser = await User.findOne({
            where: { snsId: profile.id, provider: 'kakao' },
          });
          if (exUser) {
            console.log('exUser μμ΄μ  λπ₯  π₯π₯π₯ π₯π₯π₯π₯ ');
            done(null, exUser);
          } else {
            const newUser = await User.create({
              email: profile._json && profile._json.kakao_account.email,
              snsId: profile.id,
              provider: 'kakao',
            });
            // console.log("π₯π₯π₯π₯ π₯π₯π₯π₯newUser μμ± μλ£!", newUser);
            done(null, newUser);
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      },
    ),
  );
};
