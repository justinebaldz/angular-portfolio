import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkListenerService } from 'src/app/link-listener.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  linkSubscription: any;
  navItems: any;

  constructor(
    private linkService: LinkListenerService,
    private router: Router
  ) {
    this.navItems = this.linkService.activeNavItemSubject$;

    this.linkSubscription = this.linkService.activeNavItemSubject$.subscribe({
      next: (newItem) => {
        this.navItems = newItem;
      },
    });

    // console.log(this.router.url);
    // console.log(this.linkService.navItems);
    // console.log(this.linkService.navItems[this.router.url]);

    this.linkService.setNavItem(this.linkService.navItems[this.router.url]);
  }
  ngOnInit(): void {}
}
