// aws-ses.js
import * as AWS from 'aws-sdk';
import * as nodemailer from 'nodemailer';

AWS.config.update({
    accessKeyId: process.env.SES_ACCESS_KEY,
    secretAccessKey: process.env.SES_SECRET_ACCESS_KEY,
    region: "us-east-2",
});
AWS.config.getCredentials(function (error) {
    if (error) {
        console.log(error.stack);
    }
});
const ses = new AWS.SES({ apiVersion: "2010-12-01" });

// change this to the "from" email that you want
const fromAddress = "neil.coplin@gmail.com";
const toAddress = "neil.coplin@gmail.com";

// Create a transporter of nodemailer
const transporter = nodemailer.createTransport({
    SES: ses,
});
export const sendEmail = async (data:any) => {
    try {
        const response = await transporter.sendMail({
        from: fromAddress,
        to: toAddress,
        subject: "Memorial Tribute/Honoring Request",
        html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
        <html>
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        </head>
        <body>
        <h1>Memorial Tribute/Honoring Request</h1>
        <p>Gift `+data.type+`: `+data.name+`<br />
        Amount: $`+data.amount+` via `+data.donationMethod+`</p>

        <h2>From:</h2>
        <p>`+data.fromName+`<br />
        `+data.fromStreet+`<br />
        `+data.fromCity+`, `+data.fromState+` `+data.fromZip+`<br />
        email: `+data.fromEmail+`<br/>
        phone: `+data.fromPhone+`</p>

        <h2>To:</h2>
        <p>`+data.toName+`<br />
        `+data.toStreet+`<br />
        `+data.toCity+`, `+data.toState+` `+data.toZip+`<br />
        email: `+data.toEmail+`</p>

        <h2>Personalized Message:</h2>
        <p>`+data.personalizedMessage+`</p>

        <h2>Signature Text:</h2>
        <p>`+data.signatureText+`</p>
        </body>
        </html>
        `,
        });
        return response?.messageId
        ? { ok: true }
        : { ok: false, msg: "Failed to send email" };
    } catch (error:any) {
        console.log("ERROR", error.message);
        return { ok: false, msg: "Failed to send email" };
    }
};