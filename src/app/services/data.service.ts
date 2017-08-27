import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { }

  authorize(){
    let headers = new Headers();

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      //console.log(res);
    })
  }

  search(searchquery){
    let headers = new Headers();
    let searchterm = 'query=' + searchquery;

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    return this.http.post('http://localhost:3000/search', searchterm, {headers: headers});
  }

}
