import { StandingsPageModule } from './../pages/standings/standings.module';
import { TeamHomePageModule } from './../pages/team-home/team-home.module';
import { TeamHomePage } from './../pages/team-home/team-home';
import { TeamsDetailPageModule } from './../pages/teams-detail/teams-detail.module';
import { TeamsPageModule } from './../pages/teams/teams.module';
import { TournamentsPageModule } from './../pages/tournaments/tournaments.module';
import { TournamentsPage } from './../pages/tournaments/tournaments';
import { MyTeamsPage } from './../pages/my-teams/my-teams';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MyTeamsPage,
    
  ],
  imports: [
    BrowserModule,
    TournamentsPageModule,
    TeamsPageModule,
    TeamsDetailPageModule,
    TeamHomePageModule,
    StandingsPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MyTeamsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
