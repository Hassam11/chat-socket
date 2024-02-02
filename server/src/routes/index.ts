import { Router } from "express";
import authRoutes from "./AuthRoutes";
import userRoutes from "./UserRoutes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);

export default router;
