import { Component } from '@angular/core';
import { PrimengModule } from '../../module/primeng/primeng.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [PrimengModule],
  standalone: true,
})
export class RegisterComponent { }
