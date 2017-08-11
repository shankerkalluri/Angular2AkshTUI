import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Http, Response, Headers, URLSearchParams} from '@angular/http'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DiscoverService{
    

     constructor (
    private http: Http
  ) {}

  getdiscover() {
    return this.http.get(`./json/discover.json`)
    .map((res:Response) => res.json());
  }



}


