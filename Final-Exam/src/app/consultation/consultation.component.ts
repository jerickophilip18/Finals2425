import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports:[CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent {
  consultationSlots = [
    { time: '01:00 AM - 02:00 PM' },
    { time: '02:00 PM - 03:00 PM' },
    { time: '03:00 AM - 04:00 PM' },
    { time: '04:00 AM - 05:00 PM' },
    { time: '05:00 AM - 06:00 PM' },
    { time: '06:00 AM - 07:00 PM' },
    { time: '07:00 AM - 08:00 PM' },
    { time: '08:00 AM - 09:00 PM' },
    { time: '09:00 AM - 10:00 PM' },
    { time: '10:00 AM - 11:00 PM' },
    { time: '11:00 AM - 12:00 PM' },
    { time: '12:00 AM - 01:00 AM' },

  ];

  appointmentMessage: string | null = null;

  setAppointment(index: number): void {
    const selectedSlot = this.consultationSlots[index];
    this.appointmentMessage = `Your appointment is set for ${selectedSlot.time}.`;
  }
}
