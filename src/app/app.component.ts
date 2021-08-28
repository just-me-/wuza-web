import { Component, OnInit, OnDestroy } from '@angular/core'
import { NgcCookieConsentService } from 'ngx-cookieconsent'
import { Subscription } from 'rxjs'

@Component({
  selector: 'wuza-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'wuza-web'

  private initializeSubscription?: Subscription

  constructor(private ccService: NgcCookieConsentService){}

  ngOnInit() {
    this.initializeSubscription = this.ccService.initialize$.subscribe()
  }

  ngOnDestroy() {
    this.initializeSubscription?.unsubscribe()
  }

}
