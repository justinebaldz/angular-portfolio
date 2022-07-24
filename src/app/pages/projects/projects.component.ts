import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: any;
  i: number;
  imgSrc: string;
  projectTitle: string;
  projectDescription: string;
  projectPath: string;

  constructor() {
    this.i = 0;
    this.projects = [
      {
        id: '0',
        title: 'JUANTAP WEBSITE',
        description: 'This is Case study project created using HTML, CSS, Javascript and PHP.',
        path: 'assets/img/projects/juantap.png'
      },
      {
        id: '1',
        title: 'CUBING.IO CUBESHOP',
        description: 'A school project created using HTML and CSS',
        path: 'assets/img/projects/cubeshop.png'
      },
      {
        id: '2',
        title: 'SPEED CUBING TIMER',
        description: "A timing program designed for Rubik's Cube Speedsolves.",
        path: 'assets/img/projects/timer.png'
      },
      {
        id: '3',
        title: 'JUANTAP APP UI',
        description: 'A case study project created using Java and PHP for Juantap users.',
        path: 'assets/img/projects/mob.png'
      },
    ];

    this.imgSrc = 'assets/img/projects/juantap.png';
    this.projectTitle = 'JUANTAP WEBSITE';
    this.projectDescription = 'This is Case study project created using HTML, CSS, Javascript and PHP.';
    this.projectPath = 'assets/img/projects/juantap.png';
  }

  ngOnInit(): void {}

  prev(): void {
    if (this.i === 0) this.i = 3;
    else this.i--;

    this.projectTitle = this.projects[this.i].title;
    this.projectDescription = this.projects[this.i].description; 
    this.projectPath = this.projects[this.i].path;
  }
  next(): void {
    if (this.i === 3) this.i = 0;
    else this.i++;

    this.projectTitle = this.projects[this.i].title;
    this.projectDescription = this.projects[this.i].description;
    this.projectPath = this.projects[this.i].path;
  }
}
