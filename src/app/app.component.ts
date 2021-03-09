import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowedNewServer:boolean = false;
  serverCreationStatus:string = "No Server Created!";
  serverName = "";


  constructor(){
    setTimeout(()=>{
      this.allowedNewServer = true;
    },3000);
  }

  onCreateServer(){
    this.serverCreationStatus = "Server created successfully!"
  }

  onServerNameUpdate(event){
    console.log(event.target.value);
    this.serverName = event.target.value;
  }

}
