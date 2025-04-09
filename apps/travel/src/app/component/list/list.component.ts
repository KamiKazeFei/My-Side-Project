import { Component } from '@angular/core';
import { PrimengModule } from '../../module/primeng/primeng.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  imports: [PrimengModule],
  standalone: true,
})
export class ListComponent { }
