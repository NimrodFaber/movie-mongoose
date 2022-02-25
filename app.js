const mongoose = require("mongoose"),
  fs = require("fs-extra"),
  express = require("express"),
  {
    writejsonn,
    findAMovie,
    getallmoviesbycontrey,
    getLatestMovie,
    updateMovie,
    addmovie,
    findallAMovie,
  } = require("./controller/moviecontroler"),
  app = express(),
  movieRouter = require("./routers/movierouter"),
  port = 5000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/movie", movieRouter);
mongoose
  .connect("mongodb://0.0.0.0:27017/block-monster")
  .then(() => {
    app.listen(port, () =>
      console.info(`start server start listening on port ${port}`)
    );
  })
  .catch((err) => console.error(err));

/* app.post("/addmovie", (req, res) => {
  const { name, publish_date, cast, origin_countery } = req.body;
  addmovie(name, publish_date, cast, origin_countery)
    .then((movie) => res.send(movie))
    .catch((err) => console.log(err));
}); */
app.put("/updateMovie/:_id", (req, res) => {
  /*  const {}  = req.body; */
  updateMovie(req.params._id, req.body)
    .then((movie) => res.json(movie))
    .catch((err) => res.json(err));
});
app.get("/getLatestMovie", (req, res) => {
  getLatestMovie()
    .then((movie) => res.json({ movie }))
    .catch((err) => res.json(err));
});
app.get("/getalltMovie", (req, res) => {
  findallAMovie()
    .then((movie) => res.json({ movie }))
    .catch((err) => res.json(err));
});

app.get("/getallmoviesbycontrey/:origin_countery", (req, res) => {
  const { origin_countery } = req.params;
  getallmoviesbycontrey(origin_countery)
    .then((movie) => res.json({ movie }))
    .catch((err) => res.json(err));
});
app.get("/findAMovie/:id", (req, res) => {
  const { id } = req.params;
  findAMovie(id)
    .then((movie) => res.json(movie))
    .catch((err) => res.json(err));
});
app.post("/findAMovie/:id", (req, res, next) => {
  const { id } = req.params;
  findAMovie(id)
    .then((movie) => writejsonn(movie))
    .then((movie) => res.download(movie))
    /* .then((movie) => writejsonn(movie._docs)) */
    .catch((err) => res.json(err));
});
