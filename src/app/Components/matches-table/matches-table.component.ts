import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/Services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matches:any=[];
  constructor(private router:Router, private matchService:MatchService) { }

  ngOnInit() {
  // this.matches=JSON.parse(localStorage.getItem("matches")||"[]");
  this.matchService.getAllMatches().subscribe((response)=>{
    this.matches=response.matches;
    console.log("this is the message from the BE",response.message);
    
  });
  }
  display(x:number){

this.router.navigate([`matchInfo/${x}`]);
  }
  edit(x:number){
this.router.navigate([`edtiMatch/${x}`]);

  }
  delete(x:number){
// for (let i = 0; i < this.matches.length; i++) {
//   if (this.matches[i].id==x) {
//     this.matches.splice(i,1);
//     break;
//   }
  
// }
// localStorage.setItem("matches",JSON.stringify(this.matches));

this.matchService.deletMatch(x).subscribe((response)=>{
  alert(response.message);
  this.matchService.getAllMatches().subscribe((response)=>{
    this.matches=response.matches;
    console.log(response.message);
  });
  // this.router.navigate(["admin"]);
})
  }

}
