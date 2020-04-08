import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  education;

  constructor() { }

  ngOnInit(): void {
    this.education  = {
      school: 'TecMilenio (in course, 7th semester of 8th)',
      title: 'Software Engineering'
    }
  }

}
