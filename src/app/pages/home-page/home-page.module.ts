import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { WorkCardModule } from 'src/app/components/work-card/work-card.module';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';

@NgModule({
    declarations: [HomePageComponent],
    imports: [CommonModule, HomePageRoutingModule, WorkCardModule, SpinnerModule]
})
export class HomePageModule {}
