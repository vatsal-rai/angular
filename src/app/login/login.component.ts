import {Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   username:String='';
  password:String='';


  onLogin(form: NgForm){
     this.username =form.value.username;
     this.password =form.value.password;
    console.log(this.username);

  }
}
