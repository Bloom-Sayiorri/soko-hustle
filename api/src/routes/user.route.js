import express from "express";
import userController from "../controllers/user.controller.js";
const router = express.Router();

router.get("/user", userController.getAllUsers);
router.get("/user/:id", userController.getUser);
router.post("/new-user", userController.createUser);
router.update("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

export default router;
