import { Component } from '@angular/core';

@Component({
  selector: 'app-learndirective',
  standalone: false,
  templateUrl: './learndirective.html',
  styleUrl: './learndirective.css',
})
export class Learndirective {
  show_view:number=1;
  changeView()
  {
    if (this.show_view==1)
      this.show_view=2;
    else
      this.show_view=1;
  }
  provinces=["Ha Noi","Hai Phong","Da Nang","HCM City","Can Tho"]
  products=[{"id":1,"name":"Iphone 14 Pro","price":30000000},
            {"id":2,"name":"Samsung S23 Ultra","price":25000000},
            {"id":3,"name":"Xiaomi Mi 13","price":20000000}
            ] 
}
