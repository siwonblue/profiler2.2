const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User, Profile, Image, Hashtag, Contact } = require('../models');
const router = express.Router();
const AWS = require('aws-sdk');

const frontUrl = 'https://filer.pro';
// const frontUrl = 'http://localhost:3060';

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

// const s3 = new aws.S3({
//   accessKeyId: process.env.S3_ACCESS_KEY_ID,
//   secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
//   Bucket: 'react-profiler2-s3',
// });
// //
// s3.deleteObject({ Bucket: 'react-profiler2-s3', Key: 'image.jpg' }, (err, data) => {
//   console.error(err);
//   console.log(data);
// });

router.get('/withDrawal', async (req, res, next) => {
  try {
    // const userId = req.user.id;

    // const s3 = new AWS.S3({
    //   accessKeyId: process.env.S3_ACCESS_KEY_ID,
    //   secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    //   Bucket: 'react-profiler2-s3',
    // });
    // try {
    //   await s3
    //     .deleteObject({ Bucket: 'react-profiler2-s3', Key: '1628392518572_프로파일러4.png' }, (err, data) => {
    //       if (err) {
    //         console.error('err', err);
    //       } else {
    //         console.log('data', data);
    //       }
    //     })
    //     .promise();
    // } catch (error) {
    //   console.error(error);
    //   next(error);
    // }

    await Profile.destroy({ where: { UserId: userId } });
    await User.destroy({ where: { id: userId } });
    res.status(200).json('ok');
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const user = await User.findOne({
        where: { id: req.user.id },
      });
      const me = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password'],
        },
      });
      const profiles = await Profile.findAll({
        where: { UserId: req.user.id },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        include: [
          {
            model: Image,
            attributes: {
              exclude: ['createdAt', 'updatedAt'],
            },
          },
          {
            model: Hashtag,
            attributes: {
              exclude: ['createdAt', 'updatedAt', 'ProfileTag'],
            },
          },
          {
            model: Contact,
            attributes: {
              exclude: ['createdAt', 'updatedAt'],
            },
          },
          {
            model: Profile, // 내 프로필에 좋아요 누른 프로필
            as: 'Liker',
            attributes: ['id', 'name'],
            include: [
              {
                model: Image,
                attributes: {
                  exclude: ['createdAt', 'updatedAt'],
                },
              },
            ],
          },
          {
            model: Profile, // 내 프로필에 좋아요 누른 프로필
            as: 'Liking',
            attributes: ['id', 'name'],
            include: [
              {
                model: Image,
                attributes: {
                  exclude: ['createdAt', 'updatedAt'],
                },
              },
            ],
          },
        ],
      });
      res.status(200).json({ me, profiles });
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      // during req.login , create automatically below data
      // res.setHeader( ..., Set-Cookie : connect.sid =s$3AQS3TFdGp~ , ... )

      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ['password'],
        },
        include: [
          {
            model: Profile,
            attributes: ['id'],
          },
        ],
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('logout success');
});

router.post('/signup', async (req, res, next) => {
  try {
    if (req.user) {
      await User.update(
        {
          local: req.body.local,
          nick: req.body.nick,
          age: req.body.age,
          gender: req.body.gender,
        },
        {
          where: {
            snsId: req.user.snsId,
          },
        },
      );
    }
    const me = await User.findOne({
      where: { id: req.user.id },
      attributes: {
        exclude: ['password'],
      },
    });
    const profiles = await Profile.findAll({
      where: { UserId: req.user.id },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      include: [
        {
          model: Image,
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        },
        {
          model: Hashtag,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'ProfileTag'],
          },
        },
      ],
    });
    res.status(200).json({ me, profiles });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/kakao', passport.authenticate('kakao'));

router.get(
  '/kakao/callback',
  passport.authenticate('kakao', {
    failureRedirect: `${frontUrl}/`,
  }),
  (req, res) => {
    res.redirect(`${frontUrl}/my`);
  },
);

router.get('/naver', passport.authenticate('naver'));

router.get(
  '/naver/callback',
  passport.authenticate('naver', {
    failureRedirect: `${frontUrl}/`,
  }),
  (req, res) => {
    res.redirect(`${frontUrl}/my`);
  },
);

module.exports = router;
