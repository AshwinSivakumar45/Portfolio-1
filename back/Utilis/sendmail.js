const nodemailer = require("nodemailer");

const MailSender = (Name,Email,Message)=>{
    try {
        let transport = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"ashwinsiva992@gmail.com",
                pass:"koxm ktsp uvsq wnaz"
            }
        })

        let Mail = {
            from:Email,
            to:"ashwinsiva992@gmail.com",
            subject:"Your Message",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e11d48; border-radius: 8px; background-color: #fff1f2;">
            <div style="text-align: center; padding-bottom: 20px;">
                <h1 style="color: #e11d48; font-size: 28px; font-weight: bold; margin-bottom: 8px;">Hello, ${Name}</h1>
                <p style="color: #9f1239; font-size: 18px; margin-bottom: 0;">You've received a new message!</p>
            </div>
        <hr style="border: none; border-top: 1px solid #e11d48; margin: 20px 0;">
            <div style="padding: 0 20px;">
                <p style="color: #7f1d1d; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
                    ${Message}
                </p>
            </div>
        <hr style="border: none; border-top: 1px solid #e11d48; margin: 20px 0;">
            <div style="text-align: center; padding-top: 10px;">
                <p style="color: #9f1239; font-size: 14px; margin-bottom: 8px;">Need help? Contact us at:</p>
                <a href="mailto:ashwinsiva992@gmail.com" style="color: #e11d48; font-size: 14px; text-decoration: none; font-weight: bold;">ashwinsiva992@gmail.com</a>
            </div>
       </div>`
        }

        transport.sendMail(Mail)
        console.log(Mail);
    }
    catch(e) {
        console.log(e.message);
            
    }
}

module.exports = MailSender;