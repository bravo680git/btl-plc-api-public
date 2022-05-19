import jwt from "jsonwebtoken";
import { AUTH_SECRET_KEY } from "../config/jwt.config.js";

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization
    ? req.headers.authorization.split(" ")[1]
    : undefined;
  if (!token) {
    return res.status("400").json("Missing auth token");
  }
  try {
    const { role } = jwt.verify(token, AUTH_SECRET_KEY);
    req.role = role;
    next();
  } catch (error) {
    res.status(401).json("Unauthorization");
  }
};

const isAdmin = async (req, res, next) => {
  const role = req.role;
  if (role === "admin") {
    next();
  } else {
    res.status(403).json("You are not admin");
  }
};

const checkAccDataIsValid = (req, res, next) => {
  const { username, password } = req.body;

  if (!(username && password)) {
    return res.status(400).json("Username and passoword are required field");
  }
  if (username.length < 1 || password.length < 8) {
    return res
      .status(400)
      .json("Username or password must have at least 8 characters");
  }
  next();
};

export { verifyToken, isAdmin, checkAccDataIsValid };
