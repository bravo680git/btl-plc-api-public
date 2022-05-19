import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connect from "./app/config/db.config.js";
import router from "./app/router/index.js";

//create server
const app = express();

//config server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//connect to db
connect();

//routing
router(app);

//defaullt route
app.get("/", (req, res) => {
  console.log("hello");
  res.json("Hello to my app");
  return;
});

//run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server start on port " + PORT));
