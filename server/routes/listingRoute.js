const express = require("express");
const isAuth = require("../middlewares/isAuth");
const upload = require("../middlewares/multer");
const { addListing, getListing, findListing, updateListing, deleteListing, ratingListing } = require("../controllers/listingController");
const { search } = require("../controllers/listingController");

const router = express.Router();

router.post("/add", isAuth, upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 }
]), addListing);

router.put("/update/:id", isAuth, upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 }
]), updateListing);

router.get("/get", getListing)
router.get("/search", search)
router.get("/findlistingbyid/:id",isAuth, findListing)
router.delete("/deletelisting/:id",isAuth, deleteListing)
router.post("/ratings/:id",isAuth, ratingListing)

module.exports = router;
