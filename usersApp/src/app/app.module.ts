import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducers/user.reducer';
import { UserEffects } from './store/effects/user.effects';
import { userSearchReducer } from './store/reducers/user-search.reducer';
import { UserSearchEffects } from './store/effects/user-search.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    StoreModule.forRoot(
      { 
        users: userReducer, 
        userSearch: userSearchReducer 
      }),
    EffectsModule.forRoot(
      [
        UserEffects, 
        UserSearchEffects
      ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }, 
    provideHttpClient(),
    InAppBrowser,
    SafariViewController
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}