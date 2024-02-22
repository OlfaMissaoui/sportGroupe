import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/Services/player.service';

@Component({
  selector: 'app-plyers-table',
  templateUrl: './plyers-table.component.html',
  styleUrls: ['./plyers-table.component.css']
})
export class PlyersTableComponent implements OnInit {
  players:any=[];
  constructor(private router:Router, private playerService:PlayerService) { }

  ngOnInit() {
    // this.players=JSON.parse(localStorage.getItem("players")||"[]");
    this.playerService.getAllPlayers().subscribe((response)=>{
      this.players=response.players;
      console.log("this is the message from the BE",response.message);
      
    })

  }
  updeat(obj:any){
    this.players=obj
  }
  display(x:number){
    
  this.router.navigate([`playerInfo/${x}`]);
      }
      edit(x:number){
        this.router.navigate([`edtiPlayer/${x}`]);
    }
      delete(x:number){
        // for (let i = 0; i < this.players.length; i++) {
        //   if (this.players[i].id == x) {
        //       this.players.splice(i,1);
        //       break;
        //   }
            
        //   }
        //   localStorage.setItem("players",JSON.stringify(this.players));
          this.playerService.deletPlayer(x).subscribe((response)=>{
            alert(response.message);
            this.playerService.getAllPlayers().subscribe((response)=>{
              this.players=response.players;
              console.log("this is the message from the BE",response.message);
            });      
            // this.router.navigate(["admin"]);
})
      }
}
