import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userUrl:string="http://localhost:3000/allUsers"
public token: string;
private authStatusListener = new Subject<boolean>();
private isUserAuthenticated = false;
private name: string;
  constructor(private httpClient:HttpClient, private router:Router) { }
  getToken() {
    return this.token;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  isUserAuth() {
    return this.isUserAuthenticated;
  }
  getName() {
    return this.name;
  }

signup(obj,img:File){
  let formData = new FormData();
  formData.append("firstName",obj.firstName);
  formData.append("lastName",obj.lastName);
  formData.append("email",obj.email);
  formData.append("password",obj.password);
  formData.append("role",obj.role);
  formData.append("img",img);

  console.log(formData);
  return this.httpClient.post<{message:string}>(this.userUrl+"/subscription",formData);
}

// login(obj){
//   console.log("her the object from the FE",obj);
  
// return this.httpClient.post<{message:string,data:any}>(this.userUrl+"/signin",obj);
// }
login(obj) {
  this.httpClient.post<{ user: any, message: string }>(this.userUrl + "/signin", obj).subscribe(
    (res) => {
      console.log("here response", res);
     let connectedUser=res.user;
      const token = res.user.jwt;
      this.token = token;
      if (res.user) {
        this.isUserAuthenticated = true;
        this.name = res.user.firstName + "" + res.user.lastName;
        this.authStatusListener.next(true);
        localStorage.setItem('token', token);
        localStorage.setItem('name', this.name);
        localStorage.setItem('connectedUser',JSON.stringify(connectedUser));
        // (res.user.role =="admin")? this.router.navigate(["admin"]):this.router.navigate([""]);
        (res.user.role =="admin")? window.location.href="admin":window.location.href="";
        // this.router.navigate(['/']);
      }
    }
  )
}

editProfil(newObj){
  return this.httpClient.put(this.userUrl,newObj)
}

getUserById(id){
  return this.httpClient.get<{userById:any}>(`${this.userUrl}/${id}`)
}

searchUser(query:string){
  return this.httpClient.get<{message:string}>(`${this.userUrl}=${query}`)
}

}
