const express=require('express')
const mongoose=require('mongoose')
const sendEmail=require('../middlewares/sendEmail')


const portfolioGetController= (req,res)=>{
    try {
        res.render('index')
    } catch (error) {
        res.status(404).json({error:message})
    }
}
const portfolioClientPostController= async(req,res)=>{
    try {
        const {name,email,content}=req.body
        sendEmail(name,email,content)
        .then(()=>{
            res.redirect('/')
        })
         
    } catch (error) {
        res.status(404).json({error:message})
    }
}

module.exports={portfolioGetController,portfolioClientPostController}