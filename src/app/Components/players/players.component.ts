import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/Services/player.service';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
playersTab:any=[];
  constructor(private playerService:PlayerService) { }

  ngOnInit() {
  //  this.playersTab=JSON.parse(localStorage.getItem("players") ||"[]");
  this.playerService.getAllPlayers().subscribe((response)=>{
    this.playersTab=response.players;
    console.log(response.message);
    
  });
  }
update(obj:any){
  this.playersTab = obj;
}
}
