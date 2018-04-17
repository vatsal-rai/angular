import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header/header-component.component';
import { ProjectsComponent } from './projects/projects.component';
import {ApiService} from "./api.service";
import  {HttpClientModule,HttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
