const { Router } = require("express");
const Story = require("../models").story;

const router = new Router();

router.get("/", (req, res, next) => {
  const limit = Math.min(parseInt(req.query.limit) || 25, 500);
  const offset = parseInt(req.query.offset) || 0;

  Story.findAndCountAll({ limit, offset })
    .then((result) => res.send({ stories: result.rows, total: result.count }))
    .catch((error) => next(error));
});

module.exports = router;
