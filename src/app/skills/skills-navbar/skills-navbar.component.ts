import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-navbar',
  templateUrl: './skills-navbar.component.html',
  styleUrls: ['./skills-navbar.component.scss']
})
export class SkillsNavbarComponent implements OnInit {
  collapsed: false;
  description = 'Section where you can check my skills in terms of techonology and tools';
  
  constructor() { }

  ngOnInit(): void {
  }

}
