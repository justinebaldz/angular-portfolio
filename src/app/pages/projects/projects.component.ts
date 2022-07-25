import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

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
  projectLink: any;
  prevIcon = faAngleLeft;
  nextIcon = faAngleRight;

  constructor(private router: Router) { 
    this.i = 0;
    this.projects = [
      {
        id: '0',
        title: 'JUANTAP WEBSITE',
        description: 'This is Case study project created using HTML, CSS, Javascript and PHP.',
        path: 'assets/img/projects/juantap.png',
        link: 'http://juantap.ucc-bscs-bsit.com/web/'
      },
      {
        id: '1',
        title: 'CUBING.IO CUBESHOP',
        description: 'A school project created using HTML and CSS',
        path: 'assets/img/projects/cubeshop.png',
        link: 'https://github.com/justinebaldz/cubeshop-clone'
      },
      {
        id: '2',
        title: 'SPEED CUBING TIMER',
        description: "A timing program designed for Rubik's Cube Speedsolves.",
        path: 'assets/img/projects/timer.png',
        link: ''
      },
      {
        id: '3',
        title: 'JUANTAP APP UI',
        description: 'A case study project created using Java and PHP for Juantap users.',
        path: 'assets/img/projects/mob.png',
        link: 'https://github.com/justinebaldz/juantap_mobile_app'
      },
    ];

    this.imgSrc = 'assets/img/projects/juantap.png';
    this.projectTitle = 'JUANTAP WEBSITE';
    this.projectDescription = 'This is Case study project created using HTML, CSS, Javascript and PHP.';
    this.projectPath = 'assets/img/projects/juantap.png';
    this.projectLink = 'http://juantap.ucc-bscs-bsit.com/web/';
  }

  ngOnInit(): void {}

  prev(): void {
    if (this.i === 0) this.i = 3;
    else this.i--;

    this.projectTitle = this.projects[this.i].title;
    this.projectDescription = this.projects[this.i].description; 
    this.projectPath = this.projects[this.i].path;
    this.projectLink = this.projects[this.i].link;
  }
  next(): void {
    if (this.i === 3) this.i = 0;
    else this.i++;

    this.projectTitle = this.projects[this.i].title;
    this.projectDescription = this.projects[this.i].description;
    this.projectPath = this.projects[this.i].path;
    this.projectLink = this.projects[this.i].link;
  }

  view(item: any): void {
    this.router.navigateByUrl(item);
    window.open(item, "_blank");
  }
}
