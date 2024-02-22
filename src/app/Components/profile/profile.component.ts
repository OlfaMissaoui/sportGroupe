import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  path: string;
  profileForm:FormGroup;
  profile:any={};
  id:any;
  constructor(private router:Router, private profileService:UserService, private activatedRouter:ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.path = this.router.url
    this.profileForm = this.formBuilder.group({
     
      newPassword: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12),]],
      img: [""],
    })
    let connectedUser= JSON.parse(localStorage.getItem("connectedUser"));
    console.log("here connectedUser", connectedUser);
    
    this.profileService.getUserById(connectedUser.id).subscribe((response)=>{
 this.profile= response.userById;
    })
  }
 editProfile(){
this.profileService.editProfil(this.profile).subscribe()
    
    
  }
}
