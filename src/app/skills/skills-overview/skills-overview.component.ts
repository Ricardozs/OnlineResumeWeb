import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-overview',
  templateUrl: './skills-overview.component.html',
  styleUrls: ['./skills-overview.component.scss']
})
export class SkillsOverviewComponent implements OnInit {
  description = 'Section where you can check my skills in terms of techonology and tools';

  constructor() { }

  ngOnInit(): void {
  }

}
