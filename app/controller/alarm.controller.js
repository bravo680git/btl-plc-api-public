import AlarmModel from "../model/alarm.model.js";

const get = async (req, res) => {
  try {
    const alarms = await AlarmModel.find({});
    res.json(alarms);
  } catch (error) {
    res.status(500).json("Fail to get all alarms" + error);
  }
};

const create = async (req, res) => {
  const alarms = req.body;

  try {
    for (let i = 0; i < alarms.length; i++) {
      await AlarmModel.create(alarms[i]);
    }
    res.json("Create new alarm successfully");
  } catch (error) {
    res.status(500).json("Fail to create new alarm: " + error);
  }
};

export { create, get };
