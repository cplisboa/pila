import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule  } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase  } from '@angular/fire/database';
import { AngularFireAuthModule  } from '@angular/fire/auth';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyB-iTHzPioFcD4f-JI5pnoAJ88vrrqeVPw',
  authDomain: 'pila-40e02.firebaseapp.com',
  databaseURL: 'https://pila-40e02.firebaseio.com/',
  projectId: 'pila-40e02',
  storageBucket: 'pila-40e02.appspot.com',
  messagingSenderId: '1022195982947',
  appId: '1:1022195982947:web:2bd1120336bcb8975dce56',
  measurementId: 'G-EKKNG6TMTW'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})



export class AppModule {}
