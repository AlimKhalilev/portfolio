import { Component, OnInit } from '@angular/core';
import { PortfolioWorksService } from 'src/app/services/portfolio-works.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    constructor(public portfolioWorksService: PortfolioWorksService) {}

    ngOnInit(): void {
        this.portfolioWorksService.getAll().subscribe((works) => {
            if (works) {
                this.portfolioWorksService.works = works;
            } else {
                this.portfolioWorksService.worksLoadError = true;
            }
        });
    }
}
