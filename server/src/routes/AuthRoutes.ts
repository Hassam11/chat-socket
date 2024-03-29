import AuthController from "../controllers/AuthController";
import { Router } from "express";

const router = Router();

router.post("/login", AuthController.login);

router.post("/logout", AuthController.logout);

export default router;
