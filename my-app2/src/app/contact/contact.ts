import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contact_name:string="Nguyễn Thanh Thanh"
  contact_email:string="thanhnt234112e@uel.edu.vn"
  contact_phone:string="0971651652"
  sendContact(your_name:string):void
  {
    alert("Bạn [" + your_name + "] muốn gửi contact")
  }
}
