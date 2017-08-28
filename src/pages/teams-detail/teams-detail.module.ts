import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamsDetailPage } from './teams-detail';

@NgModule({
  declarations: [
    TeamsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamsDetailPage),
  ],
})
export class TeamsDetailPageModule {}
