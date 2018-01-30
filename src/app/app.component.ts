import { Component } from '@angular/core';

import { ROUTES } from './app-routing.module'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BRIAN TRIA';
  navLinks = ROUTES;
}
