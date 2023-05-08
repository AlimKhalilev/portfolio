import { Component, Input } from '@angular/core';
import { IWork } from 'src/app/interfaces/work/work';

@Component({
    selector: 'app-work-card',
    templateUrl: './work-card.component.html',
    styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent {
    @Input() work!: IWork;

    constructor() {}
}
