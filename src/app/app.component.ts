import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinkListenerService } from './link-listener.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Portfolio';
  logo: string;
  navItems: any;
  navItemsArray: any;

  constructor(
    private linkService: LinkListenerService,
    private router: Router
  ) {
    this.logo = '< Justine Baldonado />';

    this.navItems = this.linkService.navItems;
    this.navItemsArray = [];

    Object.keys(this.navItems).forEach((key) => {
      this.navItemsArray.push(this.navItems[key]);
    });
  }

  linkClick(item: any) {
    this.router.navigate([item['link']]);
    this.linkService.setNavItem(item);
  }
}
