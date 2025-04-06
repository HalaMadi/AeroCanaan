import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
// import welcome from './email/welcomeEmail.html';
export async function sendEmail(to: string, name: string) {
    const htmlTemplate = fs.readFileSync(path.join(process.cwd(),'lib/email/welcomeEmail.html'), 'utf8');
    const htmlContent =htmlTemplate.replace('{{name}}',name)
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false 
        }
    });
    try {
        const email = await transporter.sendMail({
            from: `"AeroCanaan" <${process.env.EMAIL_USER}>`,
            to,
            subject: "Welcome to AeroCanaan!",
            html:htmlContent
        });
        await transporter.sendMail(email);
    } catch (err) {
        console.log(err);
    }
}
