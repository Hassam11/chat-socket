import UserController from "../controllers/UserController";
import { Router } from "express";

const router = Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUser);
router.post("/", UserController.createUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export default router;
