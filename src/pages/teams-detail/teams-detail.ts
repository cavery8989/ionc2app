import { Team } from './../teams/teams';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-teams-detail',
  templateUrl: 'teams-detail.html',
})
export class TeamsDetailPage {
  team: Team;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
    console.log('**team data:', this.team);
  }
}
