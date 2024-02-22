import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TeamService {
teamUrl:string="http://localhost:3000/teams";
  constructor(private httpClient:HttpClient) { }

  addTeam(obj){
    console.log("here the object from the FE",obj);
    return this.httpClient.post<{message:string}>(this.teamUrl,obj);
  }
  getAllTeam(){
    return this.httpClient.get<{teams:any,message:string}>(this.teamUrl);
  }
  getTeamById(id:any){
    return this.httpClient.get<{teame:any}>(`${this.teamUrl}/${id}`);
  } 
  updateTeam(newObj){
    console.log("here the object from the FE",newObj);
    
    return this.httpClient.put<{message:String}>(this.teamUrl,newObj);
  } 
  deleteTeam(id){
    return this.httpClient.delete<{message:String}>(`${this.teamUrl}/${id}`);
  }

  getPlayersbyTeam(id) {
    console.log(id);
    return this.httpClient.get<{ team: any}>(`${this.teamUrl}/${id}/players`);
    }


 
}
