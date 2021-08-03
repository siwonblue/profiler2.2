const express = require("express");
const { Hashtag, Profile, User, Image } = require("../models");
const router = express.Router();

router.get("/loadAll", async (req, res, next) => {
  try {
    const where = {};
    const allProfiles = await Profile.findAll({
      // where,
      // limit : 8,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Image,
          attributes: {
            exclude: ["createdAt", "updatedAt"]
          }
        },
        {
          model: Hashtag,
          attributes: {
            exclude: ["createdAt", "updatedAt", "ProfileTag"]
          }
        }
      ]
    });
    res.status(200).json(allProfiles);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
