import mongoose from "mongoose";

const statusModelSchema = mongoose.Schema({
  emer: Boolean,
  work: Boolean,
  stop: Boolean,
  reset: Boolean,
  auto: Boolean,
  manual: Boolean,
  simMode: Boolean,
  remote: Boolean,
  gaurd: Boolean,
  pEn: Boolean,
  paper: Boolean,
});

export default mongoose.model("statu", statusModelSchema);
