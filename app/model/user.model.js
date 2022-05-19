import mongoose from "mongoose";

const userModelSchema = mongoose.Schema({
  username: { type: String },
  password: { type: String, minlength: 8 },
  name: String,
  role: { type: String, default: "employee" },
});

export default mongoose.model("user", userModelSchema);
