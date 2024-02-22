import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
@Input() play:any;
@Output() newPlayers:EventEmitter<any> = new EventEmitter();
  constructor() { }
  
  ngOnInit() {
  }
delete(id){
  let playersTab=JSON.parse(localStorage.getItem("players")||"[]");
  for (let i = 0; i < playersTab.length; i++) {
   if (playersTab[i].id == id) {
    playersTab.splice(i,1);
   this.newPlayers.emit(playersTab);
   break;
   }
    
  }
  localStorage.setItem("players",JSON.stringify(playersTab));
}
}
