import { Component } from '@angular/core';
import { LunarYear } from './lunaryear';

@Component({
  selector: 'app-exercise10',
  standalone: false,
  templateUrl: './exercise10.html',
  styleUrl: './exercise10.css',
})
export class Exercise10 {
  days = ["1","2","3","4","5","6","7","8","9","10",
          "11","12","13","14","15","16","17","18","19","20",
          "21","22","23","24","25","26","27","28","29","30","31"];

  months = ["1","2","3","4","5","6","7","8","9","10","11","12"];

  years: string[] = [];

  selectedDay = "";
  selectedMonth = "";
  selectedYear = "";

  result: any = null;

  constructor() {
    // Tạo danh sách năm từ 1990 đến 2026
    for (let year = 1990; year <= 2026; year++) {
      this.years.push(year.toString());
    }
  }

  convert() {
    const lunar = new LunarYear(
      Number(this.selectedDay),
      Number(this.selectedMonth),
      Number(this.selectedYear)
    );

    this.result = lunar.findLunarYearDetail();
  }
}