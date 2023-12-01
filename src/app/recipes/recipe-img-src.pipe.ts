import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'recipeImgSrc'
})
export class RecipeImgSrcPipe implements PipeTransform {

  private imgAssetsPath = '/assets/img/recipes/'
  private imgAssetsSuffix = '.jpg'

  transform(entryLink: string, imageIndex?: number): string {
    return this.imgAssetsPath
        + entryLink.replace('-', '_').replace('_glutenfrei', '')
        + '_' + (imageIndex ?? 'main') + this.imgAssetsSuffix
  }

}
