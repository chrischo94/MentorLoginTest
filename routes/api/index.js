const router = require("express").Router();
const mentorRoutes = require("./mentors");
const privateRoutes = require("./private");
const authRoutes = require("./auth");


// Mentor routes
router.use("/private", privateRoutes);
router.use("/auth", authRoutes);
router.use("/mentors", mentorRoutes);



module.exports = router;
