import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { clearUserSearch, searchUser } from 'src/app/store/actions/user-search.actions';
import { UserSearchState } from 'src/app/store/state/user-search.state';
import { AppState } from 'src/app/app.state';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.scss'],
})
export class UsersSearchComponent implements OnInit {
  searchTerm: string = '';
  userSearchState$: Observable<UserSearchState>;

  constructor(
    private store: Store<AppState>, 
    private route: ActivatedRoute,
    private iab: InAppBrowser,
    private safariViewController: SafariViewController) {
    this.userSearchState$ = this.store.select('userSearch');
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const login = params['login'] || '';
      this.searchTerm = login;

      if (login) {
        this.searchUser(login);
      } else {
        this.store.dispatch(clearUserSearch());  // Clear the state if the search is empty
      }
    });
  }

  searchUser(login: string) {
    if (login.trim() === '') {
      this.store.dispatch(clearUserSearch());  // Clear the state if the search is empty
    } else {
      this.store.dispatch(searchUser({ login }));
    }
  }

  splitString(value: string, delimiter: string): string[] {
    return value.split(delimiter);
  }

  openLink(url: string) {
    this.safariViewController.isAvailable().then((available: boolean) => {
      this.safariViewController.show({ url }).subscribe((result: any) => {
        if (result.event === 'opened') {
          console.log('Opened');
        } else if (result.event === 'closed') {
          console.log('Closed');
        }
      });
    }).catch(() => {
      // Fallback if SafariViewController is not available
      this.iab.create(url, '_system').show();
    });
  }
}