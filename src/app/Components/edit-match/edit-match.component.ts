import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/Services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
editMachForm:FormGroup;
match:any={};
matches:any={};
id:any;
  constructor(private activatedRoute:ActivatedRoute, private matchservice:MatchService,private router:Router) { }

  ngOnInit() {
    // this.matches=JSON.parse(localStorage.getItem("matches")||"[]");
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
//   for (let i = 0; i < this.matches.length; i++) {
// if (this.matches[i].id== this.id) {
//       this.match= this.matches[i];
//       break;
// }
    
//   }
this.matchservice.getMatchById(this.id).subscribe((response)=>{
  this.match = response.match;
  })
  }
  editMatch(){
console.log("new match object",this.match);
this.matchservice.updateMatch(this.match).subscribe((response)=>{

  alert(response.message);
  // console.log("here the response from the BE",response.message);
  this.router.navigate(["admin"]);
})

  }
}
