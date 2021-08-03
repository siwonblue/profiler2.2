const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const hpp = require('hpp');
const helmet = require('helmet');
const passportConfig = require('./passport');
dotenv.config();
const app = express();
const frontUrl = 'http://filer.pro';
// const frontUrl = 'http://localhost:3060';

const db = require('./models');
const userRouter = require('./routes/user');
const profileRouter = require('./routes/profile');
const allProfilesRouter = require('./routes/allProfiles');
const hashtagProfilesRouter = require('./routes/hashtag');
const suggestionRouter = require('./routes/suggestion');
passportConfig();
db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
  app.use(hpp());
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(
    cors({
      origin: frontUrl,
      credentials: true,
    }),
  );
} else {
  app.use(morgan('dev'));
  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );
}

app.use('/', express.static(path.join(__dirname, 'uploads')));
app.use(express.json()); // axios로 데이터 보낼 떄 parsing 후 req.body 로
app.use(express.urlencoded({ extended: true })); // 일반 폼으로 데이터 보낼 떄 parsing 후 req.body 로
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
      domain: process.env.NODE_ENV === 'production' && '.filer.pro',
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  console.log(`req.authenticate🔥🔥🔥🔥🔥🔥 : ${req.authenticate()} `);
  console.log(`req.user🔥🔥🔥🔥🔥🔥 : ${req.user} `);
  next();
});
app.set('port', process.env.PORT || 3065);

app.get('/', (req, res) => {
  res.send(`hi`);
});

app.use('/user', userRouter);
app.use('/profile', profileRouter);
app.use('/profiles', allProfilesRouter);
app.use('/hashtag', hashtagProfilesRouter);
app.use('/suggestion', suggestionRouter);

app.listen(app.get('port'), (req, res) => {
  console.log(`Express server is listening on Port ${app.get('port')}`);
});
