import {Component} from '@angular/core';
import { TopService } from '../services/top.service';

@Component({

	selector:'header-component',
	templateUrl:'app/header/header.component.html',
    providers: [TopService]
	
})

export class HeaderComponent {     
    
    
	showcountries:boolean;
    header={};

    constructor(private topService: TopService) {

    
        this.topService.getUser().subscribe(data => this.header = data)
     }
     
	showcountry():void{
        this.showcountries = !this.showcountries;
    }
}


