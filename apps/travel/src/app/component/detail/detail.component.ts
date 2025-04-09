import { Component } from '@angular/core';
import { PrimengModule } from '../../module/primeng/primeng.module';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  imports: [PrimengModule],
  standalone: true,
})
export class DetailComponent { }
