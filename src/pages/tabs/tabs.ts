import { ProfilePage } from './../profile/profile';
import { VagasPage } from './../vagas/vagas';

import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  VagasPage = VagasPage;
  ProfilePage = ProfilePage;




}//fiim export
