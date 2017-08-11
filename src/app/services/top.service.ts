import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Http, Response, Headers, URLSearchParams} from '@angular/http'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TopService{
    

     constructor (
    private http: Http
  ) {}

  getUser() {
    return this.http.get(`./json/GlobalHeader.json`)
    .map((res:Response) => res.json());
  }



}


