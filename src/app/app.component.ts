import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinkListenerService } from './link-listener.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  logo: string;

  constructor(
    private linkService: LinkListenerService,
    private router: Router
  ) {
    this.logo = "< Justine Baldonado />";
  }
  navItems = [
    {
      name: "HOME",
      link: "/",
      icon: ""
    },
    {
      name: "ABOUT",
      link: "/about",
      icon: ""
    },
    {
      name: "PROJECTS",
      link: "/projects",
      icon: ""
    },
    {
      name: "CONTACT",
      link: "/contact",
      icon: ""
    }
  ]
  
  linkClick(item: any) {
    this.router.navigate([item['link']]);
    this.linkService.setNavItem(item); 
  }
}
