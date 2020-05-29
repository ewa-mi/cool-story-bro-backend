const { Router } = require("express");
const Homepage = require("../models").homepage;

const router = new Router();

router.get("/", (req, res, next) => {
  const limit = Math.min(parseInt(req.query.limit) || 25, 500);
  const offset = parseInt(req.query.offset) || 0;

  Homepage.findAndCountAll({ limit, offset })
    .then((result) => res.send({ homepages: result.rows, total: result.count }))
    .catch((error) => next(error));
});

module.exports = router;
