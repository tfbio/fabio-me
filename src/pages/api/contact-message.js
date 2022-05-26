import mailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()


export default async function (request, response) {
  if(!request.body.name || !request.body.message || !request.body.email) {
    return response.status(400).end()
  }
  console.log(typeof(request.body.message));
  console.log(typeof(request.body.email));

  try {
    const senderData = {
      from: process.env.MAIL_USERNAME,
      to: process.env.MAIL_TARGET,
      subject: `${request.body.name} sent message from ${request.body.email}`,
      text: request.body.message,
      html: `<div>${request.body.message}</div>`
    }

    const transporter = mailer.createTransport({
      port: process.env.MAIL_PORT,
      host: process.env.MAIL_HOST,
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
      }
    })
  
    transporter.verify(function (error, success) {
      if (error) {
        console.log('error in auth')
      } else {
        transporter.sendMail(senderData, function (error, info) {
          if(error)
            console.log('error when sending email')
          else
            console.log(info)
        })
      }
    })

    response.status(200).end()
  } catch (error) {
    response.json(error).status(400).end()
  }
}


