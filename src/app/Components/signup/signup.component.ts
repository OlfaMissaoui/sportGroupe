import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { generateId } from 'src/share/genericFunctions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  SignupForm: FormGroup;
  path: string;
  msgError: string;
  image: string;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.path = this.router.url
    this.SignupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12),]],
      img: [""],
    })
  }

  signup() {
    console.log(this.SignupForm.value);
    // if (this.path=="/subscription") {
    //   this.SignupForm.value.role ="user";
    // } else {
    //   this.SignupForm.value.role ="admin";
    // }
    // (this.path=="/subscription")?  this.SignupForm.value.role ="user": this.SignupForm.value.role ="admin";
    this.SignupForm.value.role = (this.path == "/subscription") ? "user" : "admin";
    this.userService.signup(this.SignupForm.value, this.SignupForm.value.img).subscribe((response) => {
      alert(response.message);
      if (response.message == "Error") {
        this.msgError = "Email Exist";
      } else {
        this.router.navigate(["Signin"]);
      }
    });
    // let usersTab=JSON.parse(localStorage.getItem("users")||"[]");
    // this.SignupForm.value.id=generateId(usersTab);
    // usersTab.push(this.SignupForm.value);
    // localStorage.setItem("users",JSON.stringify(usersTab));

  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file);
    this.SignupForm.patchValue({ img: file });
    this.SignupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.image = reader.result as string;
    }
    reader.readAsDataURL(file);
  }
}
