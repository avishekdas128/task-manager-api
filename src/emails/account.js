const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to:email,
        from:'orangeinc1221@gmail.com',
        subject:'Thank you for signing up!',
        text: `Welcome to the Task-Manger Application, ${name}!`
    })
} 

const sendCancellationEmail = (email,name) => {
    sgMail.send({
        to:email,
        from:'orangeinc1221@gmail.com',
        subject:'We are sorry!',
        text: `Bye-Bye from the Task-Manger Application, ${name}!`
    })
} 

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}