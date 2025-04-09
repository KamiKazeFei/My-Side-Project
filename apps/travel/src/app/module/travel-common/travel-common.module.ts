import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
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
  ]
})
export class TravelCommonModule { }
