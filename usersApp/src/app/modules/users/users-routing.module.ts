import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersSearchComponent } from './components/users-search/users-search.component';
import { UsersTabsComponent } from './components/users-tabs/users-tabs.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: UsersTabsComponent,
    children: [
      {
        path: 'list',
        component: UsersListComponent
      },
      {
        path: 'search',
        component: UsersSearchComponent
      },
      {
        path: 'search/:login',
        component: UsersSearchComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
