import mongoose from "mongoose";

const productModelSchema = mongoose.Schema({
  dateTime: Date,
  productsInDay: Number,
  boxsInDay: Number,
  rollsOfPaper: Number,
  productsInABox: Number,
});

export default mongoose.model("product", productModelSchema);
