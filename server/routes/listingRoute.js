const express = require("express");
const isAuth = require("../middlewares/isAuth");
const upload = require("../middlewares/multer");
const { addListing } = require("../controllers/listingController");

const router = express.Router();

router.post("/add", isAuth, upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 }
]), addListing);

module.exports = router;
