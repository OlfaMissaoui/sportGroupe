import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  
playerUrl:string="http://localhost:3000/players";
  constructor(private httpClient:HttpClient) { }

  addPlayer(obj){
    console.log("here the object from the FE",obj);
    return this.httpClient.post<{message:string}>(this.playerUrl,obj);  
  }
  getAllPlayers(){
    return this.httpClient.get<{players:any,message:string}>(this.playerUrl);
  }
  getPlayerById(id:any){
    return this.httpClient.get<{playere:any}>(`${this.playerUrl}/${id}`);
  }
  updatePlayer(newObj){
    return this.httpClient.put<{message:string}>(this.playerUrl,newObj);
  }
  deletPlayer(id){
    return this.httpClient.delete<{message:string}>(`${this.playerUrl}/${id}`);
  }

  
  
}
