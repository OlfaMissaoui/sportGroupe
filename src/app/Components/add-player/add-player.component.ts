import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/Services/player.service';
import { TeamService } from 'src/app/Services/team.service';
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm:FormGroup;
  playere:any={};
  teams:any=[];
  image: string;
  teamId:any;
  // public imagePath !:string
  // studentFile:any;
  // imgURL:any;
  constructor(private router:Router, private playerService:PlayerService, private teamService:TeamService) { }

  ngOnInit() {
   this.teamService.getAllTeam().subscribe((result)=>{
    console.log("get all team",result);
    this.teams=result.teams;
   })
  }
 

//   onSelectFile(event:any){
// if (event.target.files.length > 0) { 
//   const file = event.target.file[0];
//   this.studentFile = file;
  
//   let mimeType = event.target.files[0].type;
//   if (mimeType.playere(/image\/*/)== null) {
//     return;
//   }
//   let reader = new FileReader();
//   this.imagePath = file;
//   reader.readAsDataURL(file);
//   reader.onload=(_event)=>{
//   this.imgURL = reader.result;
//   }
// }
// }

addPlayer(){
  
  console.log("playere object",this.playere);
  this.playere.teamId=this.teamId;
  console.log("the id of team", this.playere.teamId);
  
  // let plyerTable = JSON.parse(localStorage.getItem("players")||"[]");
  // this.Playere.id=generateId(plyerTable);
  // plyerTable.push(this.Playere);
  // localStorage.setItem("players", JSON.stringify(plyerTable));
this.playerService.addPlayer(this.playere).subscribe((response)=>{
  console.log("here the response from the BE",response.message);
  
});
}

// onImageSelected(event: Event) {
//   const file = (event.target as HTMLInputElement).files[0];
//   console.log(file);
//   this.playerForm.patchValue({ img: file });
//   this.playerForm.updateValueAndValidity();
//   const reader = new FileReader();
//   reader.onload = () => {
//     this.image = reader.result as string;
//   }
//   reader.readAsDataURL(file);
// }

selectteamId(event) {
  console.log("here event",event.target.value);
  console.log("here id from name ",event.target.value);
  this.teamId=event.target.value;
  }
  
}
