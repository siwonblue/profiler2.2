const express = require('express');
const { Hashtag, Profile, User, Image } = require('../models');
const router = express.Router();
const { Op } = require('sequelize');

router.get('/loadAllLen', async (req, res, next) => {
  try {
    const allProfilesLen = await Profile.findAll();

    res.status(200).json(allProfilesLen.length);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/loadAll', async (req, res, next) => {
  try {
    const where = {};
    if (parseInt(req.query.lastId, 10)) {
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    const allProfiles = await Profile.findAll({
      where,
      limit: 10,
      order: [['createdAt', 'DESC']],
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
    res.status(200).json(allProfiles);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
