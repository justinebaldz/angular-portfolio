import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-home',
  templateUrl: './cv-home.component.html',
  styleUrls: ['./cv-home.component.scss']
})
export class CvHomeComponent implements OnInit {
  src = 'assets/Baldonado-CV.pdf';
  constructor() { }

  ngOnInit(): void {
  }

}
