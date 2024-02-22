import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
@Input() X:any;
@Output() newTeams:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

delete(id){
let teamsTab = JSON.parse(localStorage.getItem("teams")||"[]");
for (let i = 0; i < teamsTab.length; i++) {
if (teamsTab[i].id== id) {
  teamsTab.splice(i,1);
  this.newTeams.emit(teamsTab);
  break;
}
}
 localStorage.setItem("teams",JSON.stringify(teamsTab)); 
}
}
