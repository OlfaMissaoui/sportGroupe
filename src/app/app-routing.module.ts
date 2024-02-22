import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMatchComponent } from './Components/add-match/add-match.component';
import { AddPlayerComponent } from './Components/add-player/add-player.component';
import { AddTeamComponent } from './Components/add-team/add-team.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { MatchesComponent } from './Components/matches/matches.component';
import { PlayersComponent } from './Components/players/players.component';
import { AdminComponent } from './Components/admin/admin.component';
import { OurBlogComponent } from './Components/our-blog/our-blog.component';
import { MatchInfoComponent } from './Components/match-info/match-info.component';
import { EditMatchComponent } from './Components/edit-match/edit-match.component';
import { PlayerInfoComponent } from './Components/player-info/player-info.component';
import { EditPlayerComponent } from './Components/edit-player/edit-player.component';
import { TeamInfoComponent } from './Components/team-info/team-info.component';
import { EditTeamComponent } from './Components/edit-team/edit-team.component';
import { TeamsComponent } from './Components/teams/teams.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SearchComponent } from './Components/search/search.component';
import { TeamPlayersComponent } from './Components/team-players/team-players.component';
import { SearchWeatherComponent } from './Components/search-weather/search-weather.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"addMatch",component:AddMatchComponent},
  {path:"addPlayer",component:AddPlayerComponent},
  {path:"addTeam",component:AddTeamComponent},
  {path:"subscription",component:SignupComponent},
  {path:"signupAdmin",component:SignupComponent},
  {path:"Signin",component:LoginComponent},
  {path:"allMatches",component:MatchesComponent},
  {path:"Players",component:PlayersComponent},
  {path:"admin",component:AdminComponent},
  {path:"ourBlogs",component:OurBlogComponent},
  {path:"matchInfo/:id",component:MatchInfoComponent},
  {path:"edtiMatch/:id",component:EditMatchComponent},
  {path:"playerInfo/:id",component:PlayerInfoComponent},
  {path:"edtiPlayer/:id",component:EditPlayerComponent},
  {path:"teamInfo/:id",component:TeamInfoComponent},
  {path:"editTeam/:id",component:EditTeamComponent},
  {path:"teams",component:TeamsComponent},
  {path:"profile",component:ProfileComponent},
  {path:"search",component:SearchComponent},
  {path:"teamPlayers/:id",component:TeamPlayersComponent},
  {path:"searchWeather",component:SearchWeatherComponent},


  

 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
