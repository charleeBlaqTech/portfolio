const express=require('express')
const mongoose=require('mongoose')
const exphbs=require('express-handlebars')
const nodeMailer=require('nodemailer')
const mailGunTransport=require('nodemailer-mailgun-transport')
const portfolioRoute=require('./routes/portfolioRouterRoute')


const app= express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'))
app.engine('hbs', exphbs.engine({
    extname: '.hbs', defaultLayout:'main',runtimeOptions:{
        allowProtoMethodsByDefault: true,allowProtoPropertiesByDefault:true
    }
}))
app.set("view engine", 'hbs')

app.use("/",portfolioRoute)











app.listen(process.env.PORT || 9990)