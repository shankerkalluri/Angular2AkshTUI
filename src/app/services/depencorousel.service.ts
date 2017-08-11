import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Http, Response, Headers, URLSearchParams} from '@angular/http'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DepencorouselService{
    

     constructor (
    private http: Http
  ) {}

  getdiscover() {
    return this.http.get(`./json/DepnCorousel.json`)
    .map((res:Response) => res.json());
  }



}


