import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkListenerService } from 'src/app/link-listener.service';
import { CvHomeComponent } from 'src/app/components/cv-home/cv-home.component';
import { MatDialog } from '@angular/material/dialog';
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
    private router: Router,
    public dialog: MatDialog
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

  openDialog() {
    const dialogRef = this.dialog.open(CvHomeComponent, {
      height: 'auto',
      width: '50%',
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  ngOnInit(): void {}
}
