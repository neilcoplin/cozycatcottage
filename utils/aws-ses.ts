// aws-ses.js
import * as AWS from 'aws-sdk';
import * as nodemailer from 'nodemailer';

if (process.env.SES_ACCESS_KEY && process.env.SES_SECRET_ACCESS_KEY) {
    AWS.config.update({
        accessKeyId: process.env.SES_ACCESS_KEY,
        secretAccessKey: process.env.SES_SECRET_ACCESS_KEY,
        region: process.env.REGION,
    });    
} else {
    AWS.config.update({
        region: process.env.REGION,
    });
}
AWS.config.getCredentials(function (error) {
    if (error) {
        console.log(error.stack);
    }
});
const ses = new AWS.SES({ apiVersion: "2010-12-01" });

// Both of these addresses need to be verified identities in SES
const fromAddress = process.env.MEMORIAL_FROM_EMAIL;
const toAddress = process.env.MEMORIAL_TO_EMAIL;

// Conditionally add an additional prefix to the message
const testPrefix = process.env.BRANCH === 'production' ? '' : '[TEST MESSAGE] ';

// Create a transporter of nodemailer
const transporter = nodemailer.createTransport({
    SES: ses,
});
export const sendEmail = async (data:any) => {
    try {
        const response = await transporter.sendMail({
        from: fromAddress,
        to: toAddress,
        subject: testPrefix+"Memorial Tribute/Honoring Request",
        html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
        <html>
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        </head>
        <body>
        <h1>`+testPrefix+`Memorial Tribute/Honoring Request</h1>
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
        : { ok: false, msg: "Failed to send. No message ID in server response." };
    } catch (error:any) {
        console.log("ERROR", error.message);
        if (process.env.BRANCH && process.env.BRANCH !== 'main') {
            return {
                ok: false, 
                msg: "Failed to send.",
                error: error
            };
        } else {
            return {
                ok: false, 
                msg: "Failed to send."
            };
        }
    }
};