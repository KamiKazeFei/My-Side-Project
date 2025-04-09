import { Component } from '@angular/core';
import { PrimengModule } from '../../../../module/primeng/primeng.module';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
  imports: [PrimengModule],
  standalone: true,
})
export class ScheduleComponent { }
