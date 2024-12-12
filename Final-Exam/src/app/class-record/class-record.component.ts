import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const names = [
  'Ethan J. Smith',
'Ava R. Johnson',
'Leo A. Brown',
'Mia L. Davis',
'Noah T. Wilson',
'Emma M. Martinez',
'Lucas E. Thompson',
'Sophia H. White',
'Liam P. Harris',
'Olivia K. Clark'
];
const activityTypes = [
  'Hiking', 'Painting', 'Cooking', 'Reading', 'Dancing', 'Yoga', 'Gardening', 'Writing', 'Photography', 'Cycling'
];
const id = [
  "20191912", "20182249", "20202357", "20181739", "20221748", "20192154", "20202319", "20181837", "20190632", "20218070", "20238248", "20193850", "20232515", "20196001", "20198930", "20200635", "20170661", "20217387", "20238485", "20206304"
];

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}



@Component({
  selector: 'app-class-record',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './class-record.component.html',
  styleUrls: ['./class-record.component.css'],
})





export class ClassRecordComponent {

  studentRecords = Array.from({ length: 50 }, (_, i) => ({
    id: getRandomItem(id),
    name: getRandomItem(names),
    activityType: getRandomItem(activityTypes),
    email: ``,
    phoneNumber: ``,
    address: ``,
  }));



  

  currentPage = 1;
  itemsPerPage = 5;
  totalPages = Math.ceil(this.studentRecords.length / this.itemsPerPage);

  get paginatedRecords() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.studentRecords.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }


  showModal = false;
  selectedStudent: any = null;

  viewStudent(student: any) {
    this.selectedStudent = student;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }


  showEditModal = false;
  editStudent: any = {};

  openEditModal(student: any) {
    this.editStudent = { ...student }; 
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
  }

  saveEdits() {
    const index = this.studentRecords.findIndex(
      (student) => student.id === this.editStudent.id
    );
    if (index !== -1) {
      this.studentRecords[index] = { ...this.editStudent }; // Update the entire record
    }
    this.showEditModal = false; // Close the edit modal
  }
  
}
