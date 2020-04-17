import { Component, OnInit } from '@angular/core';
import { TimelineElement } from '../horizontal-timeline/timeline-element';

@Component({
  selector: 'app-we-navbar',
  templateUrl: './we-navbar.component.html',
  styleUrls: ['./we-navbar.component.scss']
})
export class WENavbarComponent implements OnInit {
  collapsed: false;
  description = 'Section where you can find my work experience information';
  content = {
    quianty: 'FullStack developer of web applications (in visual studio), working with the architecture MVC, using HTML, CSS, JavaScript, JQuery, and Ajax for the frontend, C# for the backend and Mysql for the database. Being part of the whole life cycle of the apps (Planning, analysis, design, coding, implementation, testing). Creation of view and partial view to display the data to the client an optimize performance. Ado.net an entity framework to manage the database. Design and Implementation of the UI.',
    neverEnding: 'C# developer of the games, all the logic, and physics of the game. Creating animations and interfaces. Implementing new classes and methods, coroutines, delegates, and events to check changes in the game and trigger something according to that.',
    herbalife: '.NET developer, working on prod support, enhancements and unit testing of the current apps. Creation and consumption of APIs. Creation of new classes and methods for new implementations or features. Help with the SRE certification, developing an editor config to assure coding conventions, making unit testing, and developing a logging system for the application. Creation of interfaces to ensure the implementation of the classes and to facilitate the unit testing.',
    puddingStreet: 'Freelance Project. Development of a web application, with an architecture MVVM using angular, HTML and CSS for the frontend, and for the backend a restful API made with .net core 2.1 in visual studio, and MySQL for the database. I was in charge of the planning, analysis, design, and coding of the app. Deciding which architecture would be better, designing the structure of the app, developing both front and backend, and testing it. Development of the UI.',

  }

  timeline: TimelineElement[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
