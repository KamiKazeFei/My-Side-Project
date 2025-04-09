import { Component } from '@angular/core';
import { PrimengModule } from '../../../../module/primeng/primeng.module';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
  imports: [PrimengModule],
  standalone: true,
})
export class ChartComponent { }
