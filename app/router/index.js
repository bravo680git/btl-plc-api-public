import adminRouter from "./admin.router.js";
import alarmRouter from "./alarm.router.js";
import authRouter from "./auth.router.js";
import productRouter from "./product.router.js";
import statusRouter from "./status.router.js";
import * as authMiddleware from "../middleware/auth.middleware.js";

const router = (app) => {
  app.use("/admin/users", adminRouter);
  app.use("/API/alarms", authMiddleware.verifyToken, alarmRouter);
  app.use("/API/auth", authRouter);
  app.use("/API/products", authMiddleware.verifyToken, productRouter);
  app.use("/API/status", authMiddleware.verifyToken, statusRouter);
};

export default router;
