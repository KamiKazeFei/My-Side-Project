import { Component } from '@angular/core';
import { PrimengModule } from '../../module/primeng/primeng.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [PrimengModule],
  standalone: true,
})
export class LoginComponent { }
