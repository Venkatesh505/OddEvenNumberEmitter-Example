import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timervalue: number;
@Output() timeremit= new EventEmitter<number>();
  constructor() { }
  interval;
  ngOnInit() {
  }
  OnStartClick()
  {
    this.timervalue=0;
    console.log("Inside On Start Click");
    this.interval=setInterval(()=>{
      this.timervalue=this.timervalue+1;
      this.timeremit.emit(this.timervalue);
      console.log("Inside Click_Increment");
      console.log("TimerVal:"+ this.timervalue);
     }, 1000);
    
    

  }
  OnStopClick(){
    clearInterval(this.interval);


  }
}
