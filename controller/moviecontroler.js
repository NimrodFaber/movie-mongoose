const Movie = require("../models/movie");
const fs = require("fs-extra");

const addmovie = (name, publish_date, cast, origin_countery) => {
  return new Promise((resolve, rejrct) => {
    const movie = new Movie({ name, publish_date, cast, origin_countery });
    movie
      .save()
      .then((moviee) => resolve(moviee))
      .catch((err) => rejrct(err));
  });
};

const updateMovie = (_id, body) => {
  return new Promise((resolve, reject) => {
    Movie.findByIdAndUpdate({ _id }, { $set: body })
      .then((movie) => resolve(movie))
      .catch((err) => reject(err));
  });
};

const getLatestMovie = () => {
  return new Promise((resolve, reject) => {
    Movie.findOne({})
      .sort({
        publish_date: -1,
      }) /* exec(function(err, docs) { ... } */ /* ) */
      .then((movie) => resolve(movie))
      .catch((err) => reject(err));
  });
};

const getallmoviesbycontrey = (origin_countery) => {
  return new Promise((resolve, reject) => {
    Movie.find({
      origin_countery,
    })
      .then((movies) => resolve(movies))
      .catch((err) => reject(err));
  });
};
const findAMovie = (_id) => {
  return new Promise((resolve, reject) => {
    Movie.findOne({ _id })
      .then((movie) => resolve(movie))
      .catch((err) => reject(err));
    /*  writejson(movie) */
  });
};
const findallAMovie = () => {
  return new Promise((resolve, reject) => {
    Movie.find({})
      .then((movie) => resolve(movie))
      .catch((err) => reject(err));
    /*  writejson(movie) */
  });
};

const writejsonn = (movie) => {
  fs.writeJson("./movie.json", { name: movie })
    .then(() => {
      console.log("success!");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  writejsonn,
  findAMovie,
  getallmoviesbycontrey,
  getLatestMovie,
  updateMovie,
  addmovie,
  findallAMovie,
};
/* .sort({'updatedAt': -1}).all((posts) */
