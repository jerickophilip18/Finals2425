import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  courses: string[] = [];
  newCourse: string = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      instructorName: ['', Validators.required],
      school: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  addCourse(): void {
    if (this.newCourse.trim()) {
      this.courses.push(this.newCourse.trim());
      this.newCourse = '';
    }
  }

  removeCourse(index: number): void {
    this.courses.splice(index, 1);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Data:', {
        ...this.contactForm.value,
        courses: this.courses
      });
      alert('Form submitted successfully!');
    }
  }
}
