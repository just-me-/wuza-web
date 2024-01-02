import {Component, Input} from '@angular/core'
import {wuzaIcons} from './icons'

@Component({
  selector: 'wuza-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent {
  @Input() size: number = 24
  @Input() icon?: wuzaIcons
}
