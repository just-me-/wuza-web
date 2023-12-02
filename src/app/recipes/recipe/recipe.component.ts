import {Component, Input, OnInit, Renderer2} from '@angular/core'
import {ImageSliderImage} from '../../common/image-slider/image-slider-image'
import {RecipesService} from '../recipes.service'
import {Router} from '@angular/router'
import {RecipeImgSrcPipe} from '../recipe-img-src.pipe'
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

  images: ImageSliderImage[] = []

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private srcPipe: RecipeImgSrcPipe,
    private recipesService: RecipesService
  ) { }

  ngOnInit(): void {
    const link = this.router.url.split('/').pop() as string
    this.images = this.genericImageGenerator(link, this.recipesService.imageCountByLink(link))
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


  // TODO temp... image must be named (incl alt text) in the content components
  private genericImageGenerator(link: string, imageCount: number): ImageSliderImage[] {
    const images = [this.srcPipe.transform(link)]
    for(let i = 1; i <= imageCount; i++) {
      images.push(this.srcPipe.transform(link, i))
    }
    return images.map((img, _index) => ({
        path: img,
        title: link, // TODO...
        altText: link // TODO...
      }))

  }

  // TODO legacy animation - step by step
  private animateSteps() {
    /*
    // ordered lists .steps => arrow animation
    var time_for_one = 1500;
    // trigger first one
    setClassStepByStep("ol.steps li", "arrow", time_for_one);
    // add endless loop
    setInterval(function(){
      setClassStepByStep("ol.steps li", "arrow", time_for_one);
    }, time_for_one * $("ol.steps li").length)
     */
  }

}
