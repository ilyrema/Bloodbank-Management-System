import nodemailer from 'nodemailer';


const SendMail = async ({ to, subject, html, replacements }) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        const htmlWithReplacements = html.replace(/{{\s*\$(\w+)\s*}}/g, (match, key) => {
            return replacements[key] || '';
        });

        const mailOptions = {
            from: process.env.MAIL_USERNAME,
            to,
            subject,
            html: htmlWithReplacements,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ', info.response);
    } catch (error) {
        console.error('Error sending email: ', error);
    }
};


export default SendMail;
