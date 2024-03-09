import { Component } from '@angular/core';
import { Guardian } from '../../models/Guardian';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  guardian :Guardian=new Guardian();
  guardian_id:number=5;
}
