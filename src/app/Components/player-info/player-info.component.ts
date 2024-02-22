import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/Services/player.service';


@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
playere:any={}
playersTab:any=[];
id:any =1;
  constructor(private activatedRoute:ActivatedRoute, private playerService:PlayerService) { }

  ngOnInit() {
    // this.playersTab= JSON.parse(localStorage.getItem("players")||"[]");
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
  console.log(this.id);
  // for (let i = 0; i < this.playersTab.length; i++) {
  //  if (this.playersTab[i].id == this.id) {
  //   this.Playere=this.playersTab[i];
  //   break;
  //  }
    
  // }

  this.playerService.getPlayerById(this.id).subscribe((response)=>{
    this.playere= response.playere;
  });
  }

}
