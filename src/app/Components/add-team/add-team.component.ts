import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, } from '@angular/router';
import { generateId } from 'src/share/genericFunctions';
import { TeamService } from 'src/app/Services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  teamForm:FormGroup;
  teame: any  ={};
  constructor(private router:Router , private teamService:TeamService) { }

  ngOnInit() {
  }
  addTeam(){
    console.log("teame object",this.teame);
    // let teamTab = JSON.parse(localStorage.getItem("team")||"[]");
    // this.teame.id=generateId(teamTab);
    // teamTab.push(this.teame);
    // localStorage.setItem("team",JSON.stringify(teamTab));
    
    this.teamService.addTeam(this.teame).subscribe((response)=>{
      console.log("here the message frome the BE",response.message);
      
    });
    this.router.navigate(["admin"]);


    
  }
}
