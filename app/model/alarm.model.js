import mongoose from "mongoose";

const alarmModelSchema = mongoose.Schema({
  dateTime: String,
  errorCode: String,
  message: String,
});

export default mongoose.model("alarm", alarmModelSchema);
