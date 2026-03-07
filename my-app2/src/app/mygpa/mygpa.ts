import { Component } from '@angular/core';

@Component({
  selector: 'app-mygpa',
  standalone: false,
  templateUrl: './mygpa.html',
  styleUrl: './mygpa.css',
})
export class Mygpa {
  gpa(dqt: number, dgk: number, dck: number): string {
    let gpa = dqt * 0.2 + dgk * 0.3 + dck * 0.5;
    let rank = "";

    if (gpa >= 8.5) {
      rank = "Giỏi";
    }
    else if (gpa >= 7) {
      rank = "Khá";
    }
    else if (gpa >= 5.5) {
      rank = "Trung bình";
    }
    else {
      rank = "Yếu";
    }

    return "GPA = " + gpa + " - Xếp loại: " + rank;
  }

  // Lấy dữ liệu từ input
  get_gpa(
    dqt: string,
    dgk: string,
    dck: string,
    rs: HTMLElement
  ) {
    let diem_qua_trinh = parseFloat(dqt);
    let diem_giua_ky = parseFloat(dgk);
    let diem_cuoi_ky = parseFloat(dck);

    let kq = this.gpa(
      diem_qua_trinh,
      diem_giua_ky,
      diem_cuoi_ky
    );

    rs.innerHTML = kq;
  }

  // Xóa dữ liệu
  clear_data(
    dqt: HTMLInputElement,
    dgk: HTMLInputElement,
    dck: HTMLInputElement,
    rs: HTMLElement
  ) {
    dqt.value = "";
    dgk.value = "";
    dck.value = "";
    rs.innerHTML = "";
    dqt.focus();
  }
}
