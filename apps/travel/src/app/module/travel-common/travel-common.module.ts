import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import { ApiService } from '../../service/api.service';
import { TravelScheduleService } from '../../service/travel-schedule.service';

const travelCommonModules = [
  CommonModule,
  FormsModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...travelCommonModules
  ],
  exports: [
    ...travelCommonModules,
  ],
  providers: [
    TravelScheduleService,
    ConfirmationService,
    MessageService,
    ApiService,
    provideHttpClient(),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: 'Aura'
      }
    }),
  ]
})
export class TravelCommonModule { }
