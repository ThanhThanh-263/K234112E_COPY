import { Component } from '@angular/core';
import { Student } from '../classes/student';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {

  // Danh sách khóa học (dùng cho *ngFor)
  courses: string[] = ['Ruby', 'Java', 'Python'];

  // Cờ báo lỗi cho select khóa học
  errFlag: boolean = false;

  // Model (course để mặc định là 'none' để trigger validation)
  studentModel = new Student(
    'Ba Du',
    'Du@gmail.com',
    '0971651652',
    'none',
    'toi',
    false
  );

  // Hàm validate khóa học (GIỐNG SLIDE)
  validateCourse(value: any): void {
    if (value === 'none') {
      this.errFlag = true;
    } else {
      this.errFlag = false;
    }
  }
}
