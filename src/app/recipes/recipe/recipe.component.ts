import {Component, Input, OnInit, Renderer2} from '@angular/core'

@Component({
  selector: 'wuza-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input()
  ingredients: string[] | undefined

  @Input()
  title: string | undefined

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  // TODO change to a directive
  toggleClass(event: any, className: string) {
    const hasClass = event.target.classList.contains(className)

    if(hasClass) {
      this.renderer.removeClass(event.target, className)
    } else {
      this.renderer.addClass(event.target, className)
    }
  }

}
