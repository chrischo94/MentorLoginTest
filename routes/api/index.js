const router = require("express").Router();
const mentorRoutes = require("./mentors");
const authRoutes = require("./auth");

// Mentor routes
router.use("/mentors", mentorRoutes);
router.use("/auth", authRoutes);

module.exports = router;
