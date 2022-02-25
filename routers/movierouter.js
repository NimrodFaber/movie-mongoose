const { addmovie } = require("./../controller/moviecontroler"),
  /* axios = require("axios").default, */
  express = require("express"),
  app = express(),
  router = express.Router();
/* router.use(express.static("public"));
router.use(express.urlencoded({ extended: true }));
router.use(express.json()); */

router.post("/", (req, res) => {
  const { name, publish_date, cast, origin_countery } = req.body.data;
  addmovie(name, publish_date, cast, origin_countery)
    .then((movie) => res.send(movie))
    .catch((err) => console.log(err));
});
module.exports = router;
