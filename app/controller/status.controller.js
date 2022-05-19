import StatusModel from "../model/status.model.js";

const update = async (req, res) => {
  try {
    const status = req.body;
    console.log(status);
    await StatusModel.findOneAndUpdate({}, status);
    res.json("Update status successfully");
  } catch (error) {
    res.status(500).json("Fail to update status: " + error);
  }
};

const get = async (req, res) => {
  try {
    const status = await StatusModel.find({});
    res.json(status);
  } catch (error) {
    res.status(500).json("Fail to get status: " + error);
  }
};

export { update, get };
