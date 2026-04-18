import { NextApiRequest, NextApiResponse } from "next";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body?.toString() || "{}");

  const client = new SESClient({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.SES_ACCESS_KEY!,
      secretAccessKey: process.env.SES_SECRET_ACCESS_KEY!
    }
  });

  // Conditionally add an additional prefix to the message
  const testPrefix = process.env.AWS_BRANCH === 'main' ? '' : '[TEST MESSAGE] ';

  const header = testPrefix + (body.type === "in memory of" ? "Memorial Tribute" : "Honoring Request" );
  const emailSubject = header + " for " + body.name;
  const htmlBody = `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
    <html>
      <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      </head>
      <body>
      <h1>${header}</h1>
      <p>Gift ${body.type}: ${body.name}<br />
      Amount: $${body.amount} via ${body.donationMethod}</p>

      <h2>From:</h2>
      <p>${body.fromName}<br />
      ${body.fromStreet}<br />
      ${body.fromCity}, ${body.fromState} ${body.fromZip}<br />
      email: ${body.fromEmail}<br/>
      phone: ${body.fromPhone}</p>

      <h2>To:</h2>
      <p>${body.toName}<br />
      ${body.toStreet}<br />
      ${body.toCity}, ${body.toState} ${body.toZip}<br />
      email: ${body.toEmail}</p>

      <h2>Personalized Message:</h2>
      <p>${body.personalizedMessage}</p>

      <h2>Signature Text:</h2>
      <p>${body.signatureText}</p>
      </body>
    </html>        
  `;
  const textBody = `${testPrefix}Memorial Tribute/Honoring Request

      Gift ${body.type}: ${body.name}
      Amount: $${body.amount} via ${body.donationMethod}

      From:
      ${body.fromName}
      ${body.fromStreet}
      ${body.fromCity}, ${body.fromState} ${body.fromZip}
      email: ${body.fromEmail}
      phone: ${body.fromPhone}

      To:
      ${body.toName}
      ${body.toStreet}
      ${body.toCity}, ${body.toState} ${body.toZip}
      email: ${body.toEmail}

      Personalized Message:
      ${body.personalizedMessage}

      Signature Text:
      ${body.signatureText}
  `;

  console.log("Sending email with params:", {
    Source: process.env.MEMORIAL_FROM_EMAIL,
    ToAddresses: [process.env.MEMORIAL_TO_EMAIL],
    Subject: emailSubject,
    Body: textBody
  });
  const params = {
    Source: process.env.MEMORIAL_FROM_EMAIL!,
    Destination: {
      ToAddresses: [process.env.MEMORIAL_TO_EMAIL!]
    },
    Message: {
      Subject: { Data: emailSubject },
      Body: {
        Html: {
          Data: htmlBody,
          Charset: "UTF-8"
        },
        Text: {
          Data: textBody,
          Charset: "UTF-8"
        }
      }
    }
  };

  try {
    await client.send(new SendEmailCommand(params));
    res.status(200).json({ ok: true });
    // return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({
        ok: false, 
        msg: "Failed to send."
    });
  }
}
