import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
matchUrl:string="http://localhost:3000/matches";
  constructor(private httpClient:HttpClient) { }

  addMatch(obj){
    console.log("here the object from the FE",obj);
    
return this.httpClient.post<{message:string}>(this.matchUrl,obj);
  }
  getAllMatches(){
    return this.httpClient.get<{matches:any, message:string}>(this.matchUrl);
  }
getMatchById(id:any){
  return this.httpClient.get<{match:any}>(`${this.matchUrl}/${id}`);
}
updateMatch(newObj){
  console.log("here the new object from the FE",newObj);
  
  return this.httpClient.put<{message:String}>(this.matchUrl,newObj);
}
deletMatch(id){
  return this.httpClient.delete<{message:String}>(`${this.matchUrl}/${id}`);
}
searchMatch(teamOne: string) {
  return this.httpClient.get<{ match: any }>(`${this.matchUrl}/search/${teamOne}`);
  }
}
