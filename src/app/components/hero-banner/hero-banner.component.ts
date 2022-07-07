import { Component, OnInit } from '@angular/core';
import { LinkListenerService } from '../../link-listener.service';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent implements OnInit {
  linkSubscription: any;
  navItems: any; 

  constructor(
    private linkService: LinkListenerService
  ) {

    this.navItems = this.linkService.activeNavItemSubject$;

    this.linkSubscription = this.linkService.activeNavItemSubject$.subscribe({
      next: (newItem) => {
        this.navItems = newItem;
      }
    })
  }
  
  ngOnInit(): void {
  }
}
