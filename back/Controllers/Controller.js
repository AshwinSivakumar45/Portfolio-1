const MailSender = require("../Utilis/sendmail")

const Feedback=(req,res)=>{
   const {Name,Email,Message}=req.body
    MailSender(Name,Email,Message)
   console.log(Name);
   
    res.json("Your message sent");
}
module.exports = Feedback