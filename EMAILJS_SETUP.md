# EmailJS Setup Instructions

The contact form is now configured to use EmailJS for sending emails. Follow these steps to make it fully operational:

## 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up Free" and create an account
3. Verify your email address

## 2. Create an Email Service

1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note your **Service ID** (starts with "service_")

## 3. Create an Email Template

1. Click "Email Templates" in the dashboard
2. Click "Create New Template"
3. Set up your template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone number
   - `{{message}}` - The message content

Example template:
```
Subject: New Thermomix Demo Request from {{from_name}}

You have received a new demo request:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}
```

4. Set the "To Email" field to: `{{to_email}}`
5. Save the template and note your **Template ID** (starts with "template_")

## 4. Get Your Public Key

1. Click on your username in the top right
2. Go to "Account"
3. Find your **Public Key** in the "General" tab

## 5. Update Environment Variables

1. Copy the `.env.example` file to `.env`
2. Update the values with your actual EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=service_your_actual_id
VITE_EMAILJS_TEMPLATE_ID=template_your_actual_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Form

1. Run `npm run dev` to start the development server
2. Fill out the contact form and submit
3. Check that emails are being received at paula.wobcke@outlook.com

## Important Notes

- The `.env` file is already added to `.gitignore` to keep your credentials secure
- EmailJS free tier allows 200 emails per month
- Make sure to test the form thoroughly before deployment
- The form includes error handling and a thank you message