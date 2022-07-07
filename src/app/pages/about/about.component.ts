import { Component, OnInit } from '@angular/core';
import { LinkListenerService } from '../../link-listener.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  linkSubscription: any;
  navItems: any;
  selectedAboutList: "hobbies" | "skills" | "stack";

  constructor(
    private linkService: LinkListenerService
  ) {
    this.navItems = {
      link: "",
      name: "",
      icon: "",
    };
    this.selectedAboutList = "hobbies";

    this.linkSubscription = this.linkService.activeNavItemSubject$.subscribe({
      next: (newItem) => {
        this.navItems = newItem;
      }
    })
  }

  ngOnInit(): void {
  }

  changeAboutList(type: "hobbies" | "skills" | "stack"): void {
    this.selectedAboutList = type;
  }

}

