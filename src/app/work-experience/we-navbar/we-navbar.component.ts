import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-we-navbar',
  templateUrl: './we-navbar.component.html',
  styleUrls: ['./we-navbar.component.scss']
})
export class WENavbarComponent implements OnInit {
  collapsed: false;
  description = 'Section where you can find my work experience information';

  constructor() { }

  ngOnInit(): void {
  }

}
