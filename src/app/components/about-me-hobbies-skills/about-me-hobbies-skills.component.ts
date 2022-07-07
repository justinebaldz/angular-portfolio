import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-hobbies-skills',
  templateUrl: './about-me-hobbies-skills.component.html',
  styleUrls: ['./about-me-hobbies-skills.component.scss'],
})
export class AboutMeHobbiesSkillsComponent implements OnInit {
  @Input() selectedList: 'hobbies' | 'skills' | 'stack';
  hobbies: string[];
  skills: string[];
  stack: string[];

  constructor() {
    this.selectedList = 'hobbies';
    this.hobbies = [
      "Speedcubing",
      "Playing FPS games",
      "Reading manhwa/manga"
    ];

    this.skills = [
      "Programming",
      "Mobile  Development",
      "UI/UX Design"
    ];

    this.stack = [
      "HTML",
      "JavaScript",
      "ReactJS",
      "NodeJS",

      "CSS",
      "TailwindCSS",
      "SASS",
      "Bootstrap",

      "Java",
      "Flutter",
      "PHP",
      "MySQL",
    ]
  }

  ngOnInit(): void {}
}
