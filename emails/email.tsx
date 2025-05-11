import * as React from 'react';
import { Html, Button } from "@react-email/components";

export function ContactEmail(props: any) {
  const { name, email, message } = props;

  return (
    <Html lang="en">
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong></p>
      <p>{message}</p>
    </Html>
  );
}

export default ContactEmail;
