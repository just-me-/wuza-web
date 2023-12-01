import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'recipeImgAlt'
})
export class RecipeImgAltPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null
  }

}
