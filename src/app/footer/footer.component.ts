import { GlobalFooterService } from './../services/global.footer.service';
import {Component} from '@angular/core';

@Component({

	selector:'footer-component',
	templateUrl:'app/footer/footer.component.html',
	providers: [GlobalFooterService]
})

export class FooterComponent {

	footerJson={};

    constructor(private globalFooterService: GlobalFooterService) {
	   	this.globalFooterService.getDetails().subscribe(data => this.footerJson = data);
     }
	
	

}


