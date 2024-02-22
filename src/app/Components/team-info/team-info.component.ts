import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/Services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  teame:any={};
  teamsTab:any[];
  id:any=1;
  constructor(private activatedRouter:ActivatedRoute, private teamService:TeamService) { }

  ngOnInit() {
    // this.teamsTab=JSON.parse(localStorage.getItem("teams")||"[]");
    this.id=this.activatedRouter.snapshot.paramMap.get("id");
    console.log(this.id);
    // for (let i = 0; i < this.teamsTab.length; i++) {
    // if (this.teamsTab[i].id==this.id) {
    //   this.teame=this.teamsTab[i];
    //   break;
    // }
      
    // }

    this.teamService.getTeamById(this.id).subscribe((response)=>{
      this.teame = response.teame;
    });
  }

}
