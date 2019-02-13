import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timers: number;
  Odd :number[]=[];
  Even:number[]=[];

  title = 'GameApp';
  receiveEvent(timerval: number){
    console.log("Inside ReceiveEvent");
    console.log(timerval);
    this.timers=timerval;
    console.log("Hello"+this.timers.toString());
    if(timerval%2)
    {
      this.Odd.push(timerval);
    }
    else
    {
      this.Even.push(timerval);
    }

  }
}
