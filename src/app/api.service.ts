import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class ApiService{
  constructor(private http: HttpClient){}

  giveresponse()
  {
    const uname:String ='101.prashant@gmail.com';
    const pword:String = 'rajneesh';
    return this.http.get('https://api.vaetas.com/auth/login?email='+uname+'&password='+pword);
  }

}
