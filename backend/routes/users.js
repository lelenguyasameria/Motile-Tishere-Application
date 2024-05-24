import express from 'express';
import {
  getUser,
  getUserConnections,
	addRemoveConnection,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
router.get(":id/connections", verifyToken, getUserConnections);

/* UPDATE */
router.patch("/:id/:connectionId", verifyToken, addRemoveConnection);

export default router;