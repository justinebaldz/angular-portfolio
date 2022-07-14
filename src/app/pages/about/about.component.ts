import { Component, OnInit } from '@angular/core';
import { LinkListenerService } from '../../link-listener.service';
import { Router } from '@angular/router';

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
    private linkService: LinkListenerService,
    private router: Router
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

    console.log(this.router.url);
    console.log(this.linkService.navItems);
    console.log( this.linkService.navItems[this.router.url]);

    this.linkService.setNavItem(
      this.linkService.navItems[this.router.url]
    );
  }

  ngOnInit(): void {
  }

  changeAboutList(type: "hobbies" | "skills" | "stack"): void {
    this.selectedAboutList = type; 
  }

}

