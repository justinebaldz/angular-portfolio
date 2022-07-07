import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LinkListenerService {
  activeNavItemSubject$: Subject<string>;
  navItems: any;

  constructor(
    private router: Router
  ) { 
    this.activeNavItemSubject$ = new Subject(); 

    this.navItems = {
      '/' : {
        name: 'HOME',
        link: '/',
        icon: ''
      },
      '/about' : {
        name: 'ABOUT',
        link: '/about',
        icon: ''
      },
      '/projects': {
        name: 'PROJECTS',
        link: '/projects',
        icon: ''
      },
      '/contact' : {
        name: 'CONTACT',
        link: '/contact',
        icon: ''
      }
    };

    // console.log(this.navItems["/contact]"]);

    // Object.keys(this.navItems).forEach(
    //   (key) => {
    //     console.log(key);
    //   }
    // )

  }

  setNavItem(newItem: any){
    this.activeNavItemSubject$.next(newItem);
    // console.log(newItem);
  }
}
