import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LinkListenerService {
  activeNavItemSubject$: Subject<string>;

  constructor() { 
    this.activeNavItemSubject$ = new Subject(); 
  }

  setNavItem(newItem: any){
    this.activeNavItemSubject$.next(newItem);
    // console.log(newItem);
  }
}
