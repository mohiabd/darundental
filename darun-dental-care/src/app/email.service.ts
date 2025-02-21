import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({ providedIn: 'root' })
export class EmailService {
  sendEmail(name: string, email: string, message: string) {
    const templateParams = {
      name: name,
      email: email,
      message: message
    };
    
    return emailjs.send(
      'service_laiwlvo', // 🔹 Replace with your Service ID
      'template_aostaoy', // 🔹 Replace with your Template ID
      templateParams,
      'UwBuhoUN_NrILP9Gu' // 🔹 Replace with your Public Key
    );
  }
}
