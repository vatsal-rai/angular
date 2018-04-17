import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class ApiService{
  constructor(private http: HttpClient){}

  giveresponse()
  {
    return this.http.get("https://api.vaetas.com/auth/login?email=101.prashant@gmail.com&password=rajneesh");
  }

}
