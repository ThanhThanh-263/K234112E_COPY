import { Component } from '@angular/core';

@Component({
  selector: 'app-ptb2',
  standalone: false,
  templateUrl: './ptb2.html',
  styleUrl: './ptb2.css',
})
export class Ptb2 {
  a_number: number = 5;
  b_number: number = 7;
  c_number: number = 2;
  result: string = "...";
  get_solution()
  {
    if (this.a_number==0)
    {
      if (this.b_number==0 && this.c_number==0)
      {
        this.result="Phương trình vô số nghiệm"
      }
      else if (this.b_number==0 && this.c_number!=0)
      {
        this.result="Phương trình vô nghiệm"
      }
      else
      {
        let x=-this.c_number/this.b_number
        this.result="Phương trình có một nghiệm x="+x
      }
    }
    else
    {
      let delta=Math.pow(this.b_number,2)-4*this.a_number*this.c_number
      if (delta<0)
      {
        this.result="Phương trình vô nghiệm"
      }   
      else
      {
        let x1=(-this.b_number+Math.sqrt(delta))/(2*this.a_number)
        let x2=(-this.b_number-Math.sqrt(delta))/(2*this.a_number)
        this.result="Phương trình có hai nghiệm phân biệt x1="+x1+" và x2="+x2
      }
    }
  }
}
