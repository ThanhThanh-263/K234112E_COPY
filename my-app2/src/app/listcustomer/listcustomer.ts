import id from '@angular/common/locales/extra/id';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listcustomer',
  standalone: false,
  templateUrl: './listcustomer.html',
  styleUrl: './listcustomer.css',
})
export class Listcustomer {
  customers=[
    {"id":1,"name":"Nguyen Van A","genre":"Male","image":"c1.jpg"},
    {"id":2,"name":"Tran Thi B","genre":"Female","image":"c2.jpg"},
    {"id":3,"name":"Le Van C","genre":"Male","image":"c3.jpg"},
    {"id":4,"name":"Pham Thi D","genre":"Female","image":"c4.jpg"},
    {"id":5,"name":"Hoang Van E","genre":"Male","image":"c5.jpg"}
  ]

constructor(private router:Router,private route:ActivatedRoute)
{}
view_detail(id:any)
{
  this.router.navigate(["list-Customer",id]);
}
}
