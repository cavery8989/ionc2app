import { TeamHomePage } from './../team-home/team-home';
import { TeamsDetailPage } from './../teams-detail/teams-detail';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

export interface Team {
  id: number;
  name: string;
}

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  teams: Team[] = [
    {id: 1, name: 'HC Elite'},
    {id: 2, name: 'Pizza Sundays'},
    { id:3, name: 'Mothers of Creation'}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  itemTapped(event: Event, team: Team) {
    console.log(team);
    this.navCtrl.push(TeamHomePage, team);
  }

}
