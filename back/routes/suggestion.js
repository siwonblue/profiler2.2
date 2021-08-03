const express = require("express");
const { Op } = require("sequelize");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const { User, Profile, Image, Hashtag, Contact } = require("../models");
const router = express.Router();

// GET suggestion/서강
router.get("/:input", async (req, res, next) => {
  try {
    //#을 붙였는지 아닌지 먼저 판단
    let input = req.params.input;
    if (input[0] === "#") {
      input = input.slice(1);
    }
    console.log(input); // 서강

    const hashtags = await Hashtag.findAll({
      where: {
        name: { [Op.like]: `%${input}%` }
      }
    });

    const profiles = await Profile.findAll({
      where: {
        name: { [Op.like]: `%${input}%` }
      },
      include: [
        {
          model: Image,
          attributes: ["src"]
        }
      ]
    });

    const tagSuggestionResult = hashtags.map((p) => p.name);
    // const ['서강대1','서강대2','서강대','서강대짱짱']
    const profileWithTag = await Promise.all(
      tagSuggestionResult.map((t) =>
        Profile.findAll({
          include: [
            {
              model: Hashtag,
              where: { name: t }
            }
          ]
        })
      )
    );
    // 서강대1,서강대2,서강대,서강대짱짱 이라는 태그를 포함한 모든 프로필들

    res.status(200).json({ profileWithTag, profiles });
  } catch (error) {
    console.error(error);
    next(error);
  }
});
module.exports = router;
