import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelCommonModule } from './module/travel-common/travel-common.module';

@Component({
  imports: [
    RouterModule,
    HomeComponent,    
    TravelCommonModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'travel';
}
