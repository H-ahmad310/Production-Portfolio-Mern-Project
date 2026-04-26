const express=require("express");
const sendEmailCollector= require("../collections/portfolioCollection");
const router=express.Router();

//routs
router.post("/sendEmail",sendEmailCollector)

//router object

module.exports=router;