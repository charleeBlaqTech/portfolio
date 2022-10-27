const express=require('express')
const router=express.Router()
const {portfolioGetController,portfolioClientPostController}=require('../controllers/portfolioController')



router.route("/").get(portfolioGetController).post(portfolioClientPostController)




module.exports=router