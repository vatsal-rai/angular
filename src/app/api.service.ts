import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class ApiService{
  constructor(private http: HttpClient){}

  unameentered =new EventEmitter<String>();
  pwordentered =new EventEmitter<String>();

}
