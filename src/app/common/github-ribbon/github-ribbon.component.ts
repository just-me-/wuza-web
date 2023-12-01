import {Component, Input} from '@angular/core'

@Component({
  selector: 'wuza-github-ribbon',
  templateUrl: './github-ribbon.component.html',
  styles: [
  ]
})
export class GithubRibbonComponent {

  @Input() link?: string
}
