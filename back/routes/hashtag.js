const express = require("express");
const { Hashtag, Profile, User, Image } = require("../models");

const router = express.Router();

//GET hashtag/μκ°
router.get("/:hashtag", async (req, res, next) => {
  try {
    console.log("π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯μΈμ½λ©λμ ", req.params);
    // console.log('π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯π₯', decodeURIComponent(req.params.hashtag));
    const allProfiles0 = await Profile.findAll({
      // where,
      // limit : 8,
      order: [["createdAt", "DESC"]],
      include: [
        // { required: true },
        {
          model: Image,
          attributes: {
            exclude: ["createdAt", "updatedAt"]
          }
        },
        {
          model: Hashtag,
          where: { name: decodeURIComponent(req.params.hashtag) },
          attributes: {
            exclude: ["createdAt", "updatedAt", "ProfileTag"]
          }
        }
      ]
    });
    const b = allProfiles0?.map((p) => p.id);

    const allProfiles = await Promise.all(
      b?.map((i) =>
        Profile.findAll({
          where: { id: i },
          order: [["createdAt", "DESC"]],
          include: [
            // { required: true },
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
        })
      )
    );

    res.status(200).json(allProfiles);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
