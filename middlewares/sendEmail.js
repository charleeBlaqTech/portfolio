const express=require('express')
const nodeMailer=require('nodemailer')
const mailGunTransport=require('nodemailer-mailgun-transport')

const sendEmail= async function(name,email,content){
    const mailGunAuth={
        auth:{
            api_key: process.env.KEY_MAILGUN 
            domain:  process.env.MAIL_GUN_DOMAIN 
        }
    }
    
    const transporter= nodeMailer.createTransport(mailGunTransport(mailGunAuth))

    const data={
        from:`${name} ${email}`,
        to:'blaqwayschannel@gmail.com',
        subject:"reply to us",
        text: `${content}`
    }
    
    
    const messageSent=await transporter.sendMail(data)
    return messageSent
}

module.exports=sendEmail