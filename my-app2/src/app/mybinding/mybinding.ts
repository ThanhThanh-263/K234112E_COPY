import { Component } from '@angular/core';

@Component({
  selector: 'app-mybinding',
  standalone: false,
  templateUrl: './mybinding.html',
  styleUrl: './mybinding.css',
})
export class Mybinding {
  public full_name: string = 'John Doe';
  public email: string = 'John.Doe@example.com';
  public is_readonly: boolean = true;
  public personal_style={
    color:"red",
    fontSize:"20pt",
    fontStyle:"italic"
  }
  get_fullname(
    fn:string,
    mn:string,
    ln:string,
    tdfn:HTMLElement)
  {
    tdfn.innerHTML=fn+" "+mn+" "+ln;
  }
}
