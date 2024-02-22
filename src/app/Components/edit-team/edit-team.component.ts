import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/Services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
editTeamForm:FormGroup;
teame:any={};
teams:any={};
id:any={};
  constructor(private activeatdRouter:ActivatedRoute, private teamService:TeamService, private router:Router) { }

  ngOnInit() {
// this.teams=JSON.parse(localStorage.getItem("teams")||"[]");
this.id=this.activeatdRouter.snapshot.paramMap.get("id");
// for (let i = 0; i < this.teams.length; i++) {
//  if (this.teams[i].id==this.id) {
//    this.teames=this.teams[i];
//    break;
//  }
  
// }
this.teamService.getTeamById(this.id).subscribe((response)=>{
  this.teame=response.teame;
})
  }
  editTeam(){
    console.log("new player object",this.teame);
    this.teamService.updateTeam(this.teame).subscribe((response)=>{
    
      alert(response.message);
      // console.log("here the response from the BE",response.message);
      this.router.navigate(["admin"]);
    })
  }
}
