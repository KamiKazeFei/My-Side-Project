import { Component } from '@angular/core';
import { PrimengModule } from '../../module/primeng/primeng.module';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.css',
  imports: [PrimengModule],
  standalone: true,
})
export class BasicInfoComponent { }
