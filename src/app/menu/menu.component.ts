import {Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core'
import { Subject } from 'rxjs'
import {NavigationEnd, Router} from '@angular/router'
import {takeUntil} from 'rxjs/operators'
import {wuzaIcons} from '../common/icon/icons'

@Component({
  selector: 'wuza-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit, OnDestroy {
  @ViewChild('navbarToggler') navbarToggler!: ElementRef

  private unsubscribe$ = new Subject<void>()
  private router = inject(Router)

  isBurgerNavCollapsed = true

  private get navBarToggleIsVisible() {
    return this.navbarToggler.nativeElement.getAttribute('aria-expanded') === 'true'
  }

  menuEntries: {name: string; path: string; icon: wuzaIcons}[] = [
    { name: 'Home', path: 'home', icon: 'home'},
    { name: 'Rezepte', path: 'rezepte', icon: 'restaurant'},

    // { name: 'Zitate', path: 'quotes', icon: 'bookmark'},
    { name: 'Projekte', path: 'projekte', icon: 'book'},
    // { name: 'Kontakt', path: 'contact', icon: 'face'},
    { name: 'Impressum', path: 'impressum', icon: 'impressum'},
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
