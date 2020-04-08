import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  collapsed: false;
  description = 'General section where you can learn a little about me, get my contact information and check my education and certificates';
  constructor() { }

  ngOnInit(): void {
  }

}
