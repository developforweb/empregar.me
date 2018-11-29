import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { WordpressService } from '../services/wordpress.service';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VagasPage } from '../pages/vagas/vagas';
import { RegisterPage } from '../pages/register/register';
import { RecuperarPage } from '../pages/recuperar/recuperar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ProfilePage } from '../pages/profile/profile';
import { PostPage } from '../pages/post/post';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';

  const firebaseConfig  = {
    apiKey: "AIzaSyBwKPDDOki3UUh3UxQEQUckkrobH5UJWqU",
    authDomain: "empregarme.firebaseapp.com",
    databaseURL: "https://empregarme.firebaseio.com",
    projectId: "empregarme",
    storageBucket: "empregarme.appspot.com",
    messagingSenderId: "315416868042"
  };
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VagasPage,
    RegisterPage,
    RecuperarPage,
    ProfilePage,
    PostPage,
    TabsPage,
    IntroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VagasPage,
    RegisterPage,
    RecuperarPage,
    ProfilePage,
    PostPage,
    TabsPage,
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WordpressService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
