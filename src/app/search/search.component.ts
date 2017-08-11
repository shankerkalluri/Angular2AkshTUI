import {Component} from '@angular/core';
import { DiscoverService } from '../services/discover.service';
import { DepencorouselService } from '../services/depencorousel.service';
import {TouristBannerService} from '../services/tourist.banner.service';
import { ThomsonShowmoreService } from '../services/thomson.showmore.service';

@Component({

	selector:'search-component',
	templateUrl:'app/search/search.component.html',
	providers: [DiscoverService,DepencorouselService,TouristBannerService,ThomsonShowmoreService]
	
})

export class SearchComponent{

	showmoreholidays:boolean;

	header={};
	dependence={};
	tourist={};
	showmore={};

    constructor(private discoverService: DiscoverService,private depencorouselService: DepencorouselService,private touristBannerService: TouristBannerService, private thomsonShowmoreService: ThomsonShowmoreService) {

    
        this.discoverService.getdiscover().subscribe(data => this.header = data)
        this.depencorouselService.getdiscover().subscribe(data => this.dependence = data)

        this.touristBannerService.getDetails().subscribe(data => this.tourist = data);
	   	this.thomsonShowmoreService.getDetails().subscribe(data => this.showmore = data);
     }


	showmoreholidaylist():void{
        this.showmoreholidays = !this.showmoreholidays;
    }

}


