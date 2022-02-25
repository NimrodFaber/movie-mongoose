const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "שדה כתובת הוא שדה נדרש",
  },
  publish_date: {
    type: Date,
    required: "שדה שם הוא שדה נדרש",
  },
  cast: {
    type: [String],

    required: "שדה טלפון הוא שדה נדרש",
  },
  origin_countery: {
    type: String,
  },
});
/* StoreSchema.plugin(require("mongoose-autopopulate"));
StoreSchema.methods.testFunc = function testFunc(params) {}; */
module.exports = mongoose.model("movie", movieSchema);
