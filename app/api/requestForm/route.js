import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {
      name,
      email,
      company,
      phone,
      website,
      country,
      message,
      requestType,
      submissionReason,
      confirmations,
      profileUrl
    } = await req.json();

    


    if (!name || !email || !company || !phone || !website || !country) {
      return NextResponse.json(
        { error: "Missing required fields" }, 
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "support@gtdservice.com",
        pass: "uxov hpvn jpke rrcw"
      },
    });

    const companyMailOptions = {
      from: "support@gtdservice.com",
      to: "support@gtdservice.com",
      subject: "Enquiry GTD Service",
      html: `
        <h2>Company Profile Removal Request</h2>

<p><strong>Company:</strong> ${company || "-"}</p>
<p><strong>Name:</strong> ${name || "-"}</p>
<p><strong>Email:</strong> ${email || "-"}</p>
<p><strong>Phone:</strong> ${phone || "-"}</p>
<p><strong>Country (User Selected):</strong> ${country || "-"}</p>
<p><strong>Website:</strong> ${website || "-"}</p>

<hr/>

<p><strong>Request Type (Submitted As):</strong> ${requestType || "-"}</p>
<p><strong>Submission Reason:</strong> ${submissionReason || "-"}</p>

<p><strong>Message:</strong><br/>
${message || "No additional message"}
</p>

<hr/>


<hr/>

<h3>Confirmations</h3>
<p><strong>Accuracy Confirmed:</strong> ${confirmations?.accuracy ? "Yes" : "No"}</p>
<p><strong>Irreversible Action Acknowledged:</strong> ${confirmations?.irreversible ? "Yes" : "No"}</p>
<p><strong>Validation Confirmed:</strong> ${confirmations?.validation ? "Yes" : "No"}</p>

<hr/>


        <p><b>URL Context:</b> ${profileUrl}</p>
      `,
    };

    const userMailOptions = {
      from: "contact@eximtradedata.com",
      to: email,
      subject: "Thank you for your Sample Data Request!",
      html: `<p>Hi ${name},</p>
        <p>We have received your request to access samples from our database. Our team will review your request and get back to you within 24 hours. Thank you for choosing Exim Trade Data.</p>`
    };

    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: "Request submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Send Email Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

