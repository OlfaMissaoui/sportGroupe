import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { ScoreComponent } from './Components/score/score.component';
import { PlayersComponent } from './Components/players/players.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { NextMatchComponent } from './Components/next-match/next-match.component';
import { TeamComponent } from './Components/team/team.component';
import { VideosComponent } from './Components/videos/videos.component';
import { OurBlogComponent } from './Components/our-blog/our-blog.component';
import { AddMatchComponent } from './Components/add-match/add-match.component';
import { AddPlayerComponent } from './Components/add-player/add-player.component';
import { AddTeamComponent } from './Components/add-team/add-team.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { MatchesComponent } from './Components/matches/matches.component';
import { PlayerComponent } from './Components/player/player.component';
import { AdminComponent } from './Components/admin/admin.component';
import { MatchesTableComponent } from './Components/matches-table/matches-table.component';
import { PlyersTableComponent } from './Components/plyers-table/plyers-table.component';
import { TeamsTableComponent } from './Components/teams-table/teams-table.component';
import { ArticleComponent } from './Components/article/article.component';
import { BannerComponent } from './Components/banner/banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchInfoComponent } from './Components/match-info/match-info.component';
import { AsterixPipe } from './Pipes/asterix.pipe';
import { EditMatchComponent } from './Components/edit-match/edit-match.component';
import { PlayerInfoComponent } from './Components/player-info/player-info.component';
import { EditPlayerComponent } from './Components/edit-player/edit-player.component';
import { EditTeamComponent } from './Components/edit-team/edit-team.component';
import { TeamInfoComponent } from './Components/team-info/team-info.component';
import { TeamsComponent } from './Components/teams/teams.component';
import { FilterMatchPipe } from './Pipes/filter-match.pipe';
import { FilterPlayerPipe } from './Pipes/filter-player.pipe';
import { FiltreTeamPipe } from './Pipes/filtre-team.pipe';
import { JwtInterceptorServiceService } from './Services/jwt-interceptor-service.service';
import { ProfileComponent } from './Components/profile/profile.component';
import { SearchComponent } from './Components/search/search.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { HighlightDirective } from './Directive/highlight.directive';
import { TeamPlayersComponent } from './Components/team-players/team-players.component';
import { SearchWeatherComponent } from './Components/search-weather/search-weather.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ScoreComponent,
    PlayersComponent,
    BlogsComponent,
    NextMatchComponent,
    TeamComponent,
    VideosComponent,
    OurBlogComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddTeamComponent,
    SignupComponent,
    LoginComponent,
    MatchesComponent,
    PlayerComponent,
    AdminComponent,
    MatchesTableComponent,
    PlyersTableComponent,
    TeamsTableComponent,
    ArticleComponent,
    BannerComponent,
    MatchInfoComponent,
    AsterixPipe,
    EditMatchComponent,
    PlayerInfoComponent,
    EditPlayerComponent,
    EditTeamComponent,
    TeamInfoComponent,
    TeamsComponent,
    FilterMatchPipe,
    FilterPlayerPipe,
    FiltreTeamPipe,
    ProfileComponent,
    SearchComponent,
    FilterPipe,
    HighlightDirective,
    TeamPlayersComponent,
    SearchWeatherComponent,
   

   
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorServiceService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
