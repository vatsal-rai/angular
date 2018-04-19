import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from "../api.service";
import {Route, Router, Routes} from "@angular/router";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ApiService]
})
export class LoginComponent implements OnInit {


  constructor(private apiservice:ApiService,private router:Router) { }

  ngOnInit() {
  }
   username:String='';
  password:String='';


  onLogin(form: NgForm){
     this.username =form.value.username;
     console.log(this.username);
    this.password =form.value.password;
    this.apiservice.unameentered.emit(this.username);
    this.apiservice.pwordentered.emit(this.password);
    this.router.navigate(['/profile']);



  }
}
