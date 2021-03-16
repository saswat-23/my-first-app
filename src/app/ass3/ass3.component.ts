import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass3',
  templateUrl: './ass3.component.html',
  styleUrls: ['./ass3.component.css']
})
export class Ass3Component implements OnInit {

  paraHideStatus = false;
  logArr = [];
  logCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick(){
    this.paraHideStatus = !this.paraHideStatus;
    this.logCount++;
    this.updateLogger()
  }

  updateLogger(){
    this.logArr.push("button clicked for ["+this.logCount+"] times..");
  }

}
