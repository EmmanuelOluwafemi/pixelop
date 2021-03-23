const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Basic Information</h3>
            <br />
            <p>Name: ${req.body.fname} ${req.body.lname}</p>
            <p>Email: ${req.body.email}</p>
            <p>Phone Number: ${req.body.pnumber}</p>
            <p>Company: ${req.body.company}</p>
            <p>Package: ${req.body.packages}</p>
            
            <h3>Design Brief</h3>
            <br />
            <p>Overview of Business: ${req.body.overview}</p>
            <p>Objective of design: ${req.body.objective}</p>
            <p>Design title and info: ${req.body.title}</p>
        `;

        let transporter = nodemailer.createTransport({
            services: 'gmail',
            auth: {
                user: 'emaz4me@gmail.com',
                pass: '07068637340'
            }
        })

        let mailOptions = {
            from: req.body.email,
            to: 'Emaz4me@gmail.com',
            subject: "Interested in Signing up for one of your packages",
            text: req.body.overview,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }

            console.log('Message sent: %s', info.message)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})