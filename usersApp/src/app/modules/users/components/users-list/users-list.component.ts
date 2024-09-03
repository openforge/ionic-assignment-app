import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { loadUsers } from 'src/app/store/actions/user.actions';
import { UserState } from 'src/app/store/state/user.state';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  userState$: Observable<UserState>;

  constructor(private store: Store<AppState>, private navCtrl: NavController) {
    this.userState$ = this.store.select((state) => state.users);
  }

  ngOnInit() {
    this.store.dispatch(loadUsers());
  }

  navigateToUser(user: User) {
    this.navCtrl.navigateForward(['/users/tabs/search'], {
      queryParams: { login: user.login }
    });
  }
  

  loadMoreUsers(event: any) {
    this.store.dispatch(loadUsers());
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
}