import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { Routes} from "@angular/router";
import{RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header/header-component.component';
import { ProjectsComponent } from './projects/projects.component';
import {ApiService} from "./api.service";
import  {HttpClientModule,HttpClient} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'profile',component:ProjectsComponent},
  {path:'login',component:LoginComponent}]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ProjectsComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
