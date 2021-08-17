const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const { isLoggedIn } = require('./middlewares');
const { Hashtag, Profile, User, Image, Contact, ImageS3 } = require('../models');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const router = express.Router();
const sanitizeHtml = require('sanitize-html');

try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads 폴더가 없으므로 생성합니다.');
  fs.mkdirSync('uploads');
}

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
    cb(null, true);
  } else {
    return cb(new Error('Invalid mime type'));
  }
};
const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'react-profiler2-s3',
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter,
});

// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, 'uploads');
//     },
//     filename(req, file, done) {
//       // 제로초.png
//       const ext = path.extname(file.originalname); // 확장자 추출(png)
//       const basename = path.basename(file.originalname, ext); // 제로초
//       done(null, basename + '_' + new Date().getTime() + ext); // 제로초182738172.png
//     },
//   }),
//   limits: { filesize: 10 * 1024 * 1024 }, //10MB
// });

router.get('/likeds', async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ where: { id: profileId } });
    await profile.getLiking({
      attributes: ['id', 'name'],
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch('/deleteLike', isLoggedIn, async (req, res, next) => {
  try {
    console.log(req.body);
    // { likedId: 9, likerId: 7 }
    const likingId = req.body.likingId;
    const likerId = req.body.likerId;
    const profileLiking = await Profile.findOne({ where: { id: likingId } });
    const profileLiker = await Profile.findOne({ where: { id: likerId } });
    if (!profileLiking) {
      return res.status(403).send('존재하지 않는 프로필입니다.');
    }
    await profileLiking.removeLiker(likerId);
    const likingList = await profileLiker.getLiking({
      include: [
        {
          model: Image,
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        },
      ],
    });
    res.status(200).json({ likingList, id: likerId });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch('/edit', isLoggedIn, upload.none(), async (req, res, next) => {
  try {
    let name = req.body.name;
    let intro = req.body.intro;
    let tag = req.body.tag;
    let image = req.body.image;
    const profileId = req.body.profileId;

    intro = sanitizeHtml(intro, { allowedTags: [] });
    name = sanitizeHtml(name, { allowedTags: [] });
    tag = sanitizeHtml(tag, { allowedTags: [] });
    image = sanitizeHtml(image, { allowedTags: [] });

    if (req.body.tag === 'undefined') {
      tag = undefined;
    } else {
      tag = req.body.tag;
    }
    if (req.body.image === 'null') {
      image = null;
    } else {
      image = req.body.image;
    }

    await Profile.update(
      {
        name: name,
        intro: intro,
      },
      {
        where: {
          id: profileId,
        },
      },
    );
    const profile = await Profile.findOne({ where: { id: profileId } });
    if (!tag) {
      await profile.setHashtags([]);
    }
    if (tag) {
      const hashtags = tag.match(/#[^\s#]+/g); // 이번에 수정하고자 하는 해시태그들
      const result = await Promise.all(
        hashtags?.map((tag) => Hashtag.findOrCreate({ where: { name: tag.slice(1).toLowerCase() } })),
      );
      await profile.setHashtags(result.map((p) => p[0]));
    }
    const exI = await Image.findOne({ where: { ProfileId: profileId } });
    if (image) {
      if (!exI) {
        await ImageS3.create({ src: image, UserId: req.user.id });
        const imag = await Image.create({ src: image });
        await profile.addImages(imag);
      } else {
        await ImageS3.create({ src: image, UserId: req.user.id });
        await Image.update(
          {
            src: image,
          },
          {
            where: {
              ProfileId: profileId,
            },
          },
        );
      }
    }
    res.send('ok');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch('/deleteContact', isLoggedIn, async (req, res, next) => {
  try {
    //console.log(req.body)
    // { contactId: 1, profileId: 10 }
    await Contact.destroy({
      where: { id: req.body.contactId },
    });
    const Contacts = await Contact.findAll({
      where: {
        ProfileId: req.body.profileId,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.status(200).json({ Contacts, id: req.body.profileId });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/add', isLoggedIn, upload.none(), async (req, res, next) => {
  try {
    let name = req.body.name;
    let intro = req.body.selfIntro;
    name = sanitizeHtml(name, { allowedTags: [] });
    intro = sanitizeHtml(intro, { allowedTags: [] });
    let tag;
    let image;
    if (req.body.tag === 'undefined') {
      tag = undefined;
    } else {
      tag = req.body.tag;
      tag = sanitizeHtml(tag, { allowedTags: [] });
    }
    if (req.body.image === 'null') {
      image = null;
    } else {
      image = req.body.image;
      image = sanitizeHtml(image, { allowedTags: [] });
    }
    const profile = await Profile.create({
      name: name,
      intro: intro,
      UserId: req.user.id,
    });
    if (tag) {
      const hashtags = tag.match(/#[^\s#]+/g);
      const result = await Promise.all(
        hashtags.map((tag) => Hashtag.findOrCreate({ where: { name: tag.slice(1).toLowerCase() } })),
      );
      await profile.addHashtags(result.map((p) => p[0]));
    }
    if (image) {
      await ImageS3.create({ src: image, UserId: req.user.id });
      const imag = await Image.create({ src: image });
      await profile.addImages(imag);
    }
    const imagePath = await Image.findOne({
      where: { ProfileId: profile.id },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.send({ image: imagePath, id: profile.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/image', isLoggedIn, upload.single('image'), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.json('defaultProfile.jpeg');
    }
    res.json(req.file.location);
  } catch (error) {
    res.json(error.message);
  }
});

router.post('/contact', isLoggedIn, async (req, res, next) => {
  try {
    let title = req.body.title;
    let url = req.body.url;
    title = sanitizeHtml(title, { allowedTags: [] });
    url = sanitizeHtml(url, { allowedTags: [] });
    const profileId = req.body.profileId;
    if (url[0] !== 'h') {
      url = 'https://' + url;
    }
    await Contact.create({
      title,
      url,
      ProfileId: profileId,
    });
    const Contacts = await Contact.findAll({
      where: {
        ProfileId: profileId,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.status(200).json({ Contacts, id: profileId });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/loadOther', async (req, res, next) => {
  try {
    const profileId = req.body.profileId;
    const profile = await Profile.findOne({
      where: { id: profileId },
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
          model: Profile, // 좋아요 누른 프로필
          as: 'Liker',
          attributes: ['id', 'name'],
        },
      ],
    });
    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//프로필 삭제
router.patch('/delete', isLoggedIn, async (req, res, next) => {
  try {
    const id = req.body.id;

    await Profile.destroy({ where: { id: id } });

    res.status(200).send('ok');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch('/:likedId/like', isLoggedIn, async (req, res, next) => {
  try {
    const likedId = req.body.likedId; // 숫자
    const likedIdtest = req.params.likedId; // 문자
    const likerId = req.body.likerId; //숫자

    const profile = await Profile.findOne({
      where: { id: likedId },
    });
    if (!profile) {
      return res.status(403).send('존재하지 않는 프로필입니다.');
    }
    await profile.addLiker(likerId);
    res.json({ profile, likedId, likerId });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
