import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/Services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamesTab:any=[];
  constructor(private teamsService:TeamService, private router:Router) { }

  ngOnInit() {
    // this.teamesTab=JSON.parse(localStorage.getItem("teams")||"[]");
    this.teamsService.getAllTeam().subscribe((response)=>{
      this.teamesTab=response.teams;
      console.log(response.message);
      
    });
  }
update(object:any){
  this.teamesTab = object;
}
showTeam(id){
  this.router.navigate([`teamPlayers/${id}`]);
  }

}
