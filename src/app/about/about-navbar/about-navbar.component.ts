import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-navbar',
  templateUrl: './about-navbar.component.html',
  styleUrls: ['./about-navbar.component.scss']
})
export class AboutNavbarComponent implements OnInit {
  collapsed: false;
  description = 'Section where I explain the purpose of this app';

  constructor() { }

  ngOnInit(): void {
  }

}
