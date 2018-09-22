import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SinginComponent } from './auth/singin/singin.component';
import { SingoutComponent } from './auth/singout/singout.component';
import {FormsModule} from '@angular/forms';
import { AuthService } from './services/auth.service';

const appRoutes : Routes=[
  {path:'singin',component : SinginComponent},
  {path:'singup',component : SingoutComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SinginComponent,
    SingoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
