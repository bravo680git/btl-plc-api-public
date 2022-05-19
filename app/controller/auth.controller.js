import jwt from "jsonwebtoken";
import UserModel from "../model/user.model.js";
import { AUTH_SECRET_KEY } from "../config/jwt.config.js";

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username, password });
    if (user) {
      const token = jwt.sign(
        {
          username: user.username,
          role: user.role,
        },
        AUTH_SECRET_KEY
      );
      res.json({
        user: user.name,
        role: user.role,
        authToken: token,
      });
    } else {
      res.status(400).json("User is invalid");
    }
  } catch (error) {
    res.status(500).json("Fail to login" + error);
  }
};

export { login };
