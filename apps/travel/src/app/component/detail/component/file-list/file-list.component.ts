import { Component } from '@angular/core';
import { PrimengModule } from '../../../../module/primeng/primeng.module';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrl: './file-list.component.css',
  imports: [PrimengModule],
  standalone: true,
})
export class FileListComponent { }
