import { Component, OnInit, OnDestroy } from '@angular/core'

@Component({
  selector: 'wuza-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'wuza-web'

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
