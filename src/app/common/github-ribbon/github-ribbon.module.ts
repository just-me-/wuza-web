import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GithubRibbonComponent } from './github-ribbon.component'



@NgModule({
  declarations: [GithubRibbonComponent],
  exports: [
    GithubRibbonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GithubRibbonModule { }
