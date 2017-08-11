import {Injectable} from "@angular/core"; 
import 'rxjs/Rx'; 
import {Http, Response, Headers, URLSearchParams} from '@angular/http' 
import {Observable} from 'rxjs/Observable'; 
@Injectable() 
export class GlobalFooterService{ 
    
     constructor ( 
    private http: Http 
  ) {} 
  getDetails() { 
    return this.http.get(`./json/GlobalFooter.json`) 
    .map((res:Response) => res.json()); 
  } 

}