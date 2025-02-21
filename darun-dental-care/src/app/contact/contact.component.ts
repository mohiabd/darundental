import { Component } from '@angular/core';
import { EmailService } from '../email.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  isSending = false; // Loader state
  successMessage = '';
  errorMessage = '';

  constructor(private emailService: EmailService) {}

  sendEmail(event: Event) {
    event.preventDefault(); // Prevent page reload
    this.isSending = true; // Show loader
    this.successMessage = '';
    this.errorMessage = '';

    this.emailService.sendEmail(this.name, this.email, this.message)
      .then(response => {
        this.successMessage = 'Your message has been sent successfully!';
        this.resetForm();
      })
      .catch(error => {
        this.errorMessage = 'Failed to send your message. Please try again.';
      })
      .finally(() => {
        this.isSending = false; // Hide loader
      });
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
