import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  name: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method==='POST') {
    try {
      const { firstName, lastName, email, message, charCnt, phoneNumber } = JSON.parse(req.body);
      const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: process.env.EMAIL_USR,
            pass: process.env.EMAIL_PW
          }
      });
      const htmlContent = `
        <html>
          <body>
            <p> First Name: ${firstName} </p>
            <p> Last Name: ${lastName} </p>
            <p> Phone Number: ${phoneNumber} </p>
            <p> Message: ${message} </p>
          </body>
        </html>
      `
      const mailOptions = {
        from: 'junkMailer990@gmail.com',
        to: 'junkMailer990@gmail.com',
        subject: 'Form Submission',
        text: req.body
      };
      const ans = await transporter.sendMail(mailOptions).then((res) => {
      })
      res.status(200).json({
        status: 'success'
      });
    } catch{
      res.status(500).json({error: 'Internal server error'});
    }
  }
  // res.status(200).json({ name: 'John Doe' });
};
