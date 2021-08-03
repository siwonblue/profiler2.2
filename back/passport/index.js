const passport = require('passport');
const kakao = require('./kakao');
const naver = require('./naver');

const { User } = require('../models');
module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log('serializeUser 실행');
    // 서버쪽에 [{ id: 1, cookie: 'clhxy' }]
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    console.log('------deserializeUser 실행------');
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user); // 요청에서 보내준 id를 기반으로 db 에서 정보를 가져와 req.user 에 담아준다.
      // 로그인이 된 상태에서 req.authenticate() 는 true 가 나옴.
    } catch (error) {
      console.error(error);
      done(error);
    }
  });
  naver();
  kakao();
};

// 프론트에서 서버로는 cookie만 보내요(clhxy)
// 서버가 쿠키파서, 익스프레스 세션으로 쿠키 검사 후 id: 1 발견
// id: 1이 deserializeUser에 들어감
// req.user로 사용자 정보가 들어감

// 요청 보낼때마다 deserializeUser가 실행됨(db 요청 1번씩 실행)
// 실무에서는 deserializeUser 결과물 캐싱
