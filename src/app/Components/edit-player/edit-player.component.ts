import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/Services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  editPlayerForm:FormGroup;
  Playere:any={};
  players:any={};
  id:any;
  constructor(private activatedRoute:ActivatedRoute, private playerService:PlayerService,private router:Router ) { }

  ngOnInit() {
    // this.players=JSON.parse(localStorage.getItem("players")||"[]");
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    // for (let i = 0; i < this.players.length; i++) {
    //   if (this.players[i].id==this.id) {
    //     this.Playere=this.players[i];
    //     break;
    //   }
      
    // }
    this.playerService.getPlayerById(this.id).subscribe((response)=>{
      this.Playere= response.playere;

    })
  }
  editPlayer(){
    console.log("new player object",this.Playere);
    this.playerService.updatePlayer(this.Playere).subscribe((response)=>{
    
      alert(response.message);
      // console.log("here the response from the BE",response.message);
      this.router.navigate(["admin"]);
    })
}
}
