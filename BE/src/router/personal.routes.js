const express = require("express");
const router = express.Router();
const personal = require("../controller/personal.controller");

router.get("/getPoint",personal.getPointMost);
router.post("/createPersonal",personal.getCreatePersonal);
router.get("/getList",personal.getPersonal);
router.get("/:personalId", personal.getPersonalByID);
router.delete("/deletePersonal/:personalId",personal.getDeletePersonalByID);
router.put("/updatePersonal/:personalId",personal.getUpdatePersonalByID);
router.get("/",personal.getCountPersonal);


module.exports = router;    