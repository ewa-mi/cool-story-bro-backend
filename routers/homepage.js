const { Router } = require("express");
const auth = require("../auth/middleware");
const Homepage = require("../models").homepage;
const Story = require("../models").story;

const router = new Router();

router.get("/", (req, res, next) => {
  const limit = Math.min(parseInt(req.query.limit) || 25, 500);
  const offset = parseInt(req.query.offset) || 0;

  Homepage.findAndCountAll({ limit, offset })
    .then((result) => res.send({ homepages: result.rows, total: result.count }))
    .catch((error) => next(error));
});

router.patch("/edit", auth, async (req, res) => {
  try {
    const { homepageId: id, background, color, description, title } = req.body;

    await Homepage.update(
      {
        title: title,
        description: description,
        backgroundColor: background,
        color: color,
      },
      { where: { id } }
    );

    const homepages = await Homepage.findAll();

    return res.status(200).send(homepages);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/post", auth, async (req, res) => {
  try {
    const { homepageId, name, content, image } = req.body;

    await Story.create({
      name: name,
      content: content,
      imageUrl: image,
      homepageId: homepageId,
    });
    const stories = await Story.findAll();
    return res.status(200).send(stories);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
