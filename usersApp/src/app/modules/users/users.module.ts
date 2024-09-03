import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersSearchComponent } from './components/users-search/users-search.component';
import { UsersTabsComponent } from './components/users-tabs/users-tabs.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsersTabsComponent, UsersListComponent, UsersSearchComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
