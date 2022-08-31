const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getMe, updateUser } = require("../api/users");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.route("/:id").put(protect, updateUser);

module.exports = router;
