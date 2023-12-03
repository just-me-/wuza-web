import {Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core'
import { Subject } from 'rxjs'
import {NavigationEnd, Router} from '@angular/router'
import {takeUntil} from 'rxjs/operators'

@Component({
  selector: 'wuza-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit, OnDestroy {
  @ViewChild('navbarToggler') navbarToggler!: ElementRef

  private unsubscribe$ = new Subject<void>()
  private router = inject(Router)

  private get navBarToggleIsVisible() {
    return this.navbarToggler.nativeElement.getAttribute('aria-expanded') === 'true'
  }

  menuEntries = [
    { name: 'Home', path: 'home', icon: 'home'},
    { name: 'Rezepte', path: 'rezepte', icon: 'restaurant'},

    // { name: 'Zitate', path: 'quotes', icon: 'bookmark'},
    { name: 'Projekte', path: 'projekte', icon: 'book'},
    // { name: 'Kontakt', path: 'contact', icon: 'face'},
    { name: 'Impressum', path: 'impressum', icon: 'account_balance'},
  ]

  ngOnInit() {
    // close mobile navigation
    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.collapseNav()
      }
    })
  }

  ngOnDestroy() {
    this.unsubscribe$.next()
  }

  private collapseNav() {
    if (this.navBarToggleIsVisible) {
      this.navbarToggler.nativeElement.click()
    }
  }

}
