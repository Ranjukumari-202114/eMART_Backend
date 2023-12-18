const nodemailer = require("nodemailer");




const contactUs = async (req,res) => {
  
    const contact_Detail = req.body;

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: contact_Detail.email,
            subject:contact_Detail.subject,
            message:contact_Detail.message,
        };

        console.log(mailOptions)

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).send("mail send to the user")
            }
        })

    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }

};

module.exports = {
    contactUs
  };