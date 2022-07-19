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
        description:
          'This is Case study project created using HTML, CSS, Javascript and PHP.',
      },
      {
        id: '1',
        title: 'CUBING.IO CUBESHOP',
        description: 'A school project created using HTML and CSS',
      },
      {
        id: '2',
        title: 'SPEED CUBING TIMER',
        description: "A timing program designed for Rubik's Cube Speedsolves.",
      },
      {
        id: '3',
        title: 'JUANTAP APP UI',
        description:
          'A case study project created using Java and PHP for Juantap users.',
      },
    ];

    this.imgSrc = 'assets/img/projects/juantap.png';
    this.projectTitle = 'JUANTAP WEBSITE';
    this.projectDescription = 'This is Case study project created using HTML, CSS, Javascript and PHP.';
    this.projectPath = '/assets/img/projects/juantap.png';
  }

  ngOnInit(): void {}

  prev(): void {
    console.log(this.projects[this.i--]);
    console.log(this.projects[this.i].title);
    this.projectTitle = this.projects[this.i].title;
  }
  next(): void {
    console.log(this.projects[this.i++]);
    this.projectTitle = this.projects[this.i].title;
  }
}
