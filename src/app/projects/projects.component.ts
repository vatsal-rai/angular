import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {observable} from "rxjs/symbol/observable";
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ApiService]

})
export class ProjectsComponent implements OnInit,UserResponse {

  constructor(private apiservice: ApiService, private http: HttpClient) {
  }

  ngOnInit() {
    this.apiservice.unameentered.subscribe((uname: String) => this.uname = uname);
    this.apiservice.pwordentered.subscribe((pword: String) => this.pword = pword);
     this.http.get<UserResponse>("https://api.vaetas.com/auth/login?email=101.prashant@gmail." +
     "com&password=rajneesh").subscribe((response)=>{console.log(response.token)
       this.token=response.token
     }
     );
     this.http.get(" https://api.vaetas.com/me",{headers:{"Authorization":" bearer "+this.token}})
       .subscribe((res)=>console.log(res));

  }

  uname: String = '';
  pword: String = '';
  token: String='';







}

