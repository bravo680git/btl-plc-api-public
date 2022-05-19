import UserModel from "../model/user.model.js";

const get = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json("Fail to get all users: " + error);
  }
};
//
const create = async (req, res) => {
  try {
    const accounts = req.body;
    for (let i = 0; i < accounts.length; i++) {
      await UserModel.create(accounts[i]);
      res.json("Create new account successfully");
    }
  } catch (error) {
    res.status(500).json("Fail to create new account: " + error);
  }
};

export { get, create };
