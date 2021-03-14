import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass2',
  templateUrl: './ass2.component.html',
  styleUrls: ['./ass2.component.css']
})
export class Ass2Component implements OnInit {

  username:string="";
  isBtnDisabled:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  resetUsername(){
    this.username = "";
  }

}
