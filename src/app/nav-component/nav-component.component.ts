import { Component, OnInit } from '@angular/core';
import { LinkListenerService } from '../link-listener.service';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.scss']
})
export class NavComponentComponent implements OnInit {
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
