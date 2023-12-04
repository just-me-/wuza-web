import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ProjectsComponent} from './projects.component'
import {ProjectsService} from './projects.service'
import {RouterModule, ROUTES, Routes} from '@angular/router'
import {AntenneComponent} from './content/antenne/antenne.component'
import {BuildToolComponent} from './content/build-tool/build-tool.component'
import {EasymechComponent} from './content/easymech/easymech.component'
import {EventComponent} from './content/event/event.component'
import {IbcComponent} from './content/ibc/ibc.component'
import {IpaComponent} from './content/ipa/ipa.component'
import {JsMarioComponent} from './content/js-mario/js-mario.component'
import {RockTheRingComponent} from './content/rock-the-ring/rock-the-ring.component'
import {SaComponent} from './content/sa/sa.component'
import {SbbComponent} from './content/sbb/sbb.component'
import {TesoAddonsComponent} from './content/teso-addons/teso-addons.component'
import {TesoMapComponent} from './content/teso-map/teso-map.component'
import {WgAppComponent} from './content/wg-app/wg-app.component'
import {WordpressComponent} from './content/wordpress/wordpress.component'
import {WuzaComponent} from './content/wuza/wuza.component'
import {projectRoutes} from './projects'
import {GithubRibbonModule} from '../common/github-ribbon/github-ribbon.module'
import {ImageSliderModule} from '../common/image-slider/image-slider.module'
import {WuzaCommonModule} from '../common/common.module'

const standardRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProjectsComponent
  }
]

@NgModule({
  declarations: [
    ProjectsComponent,
    AntenneComponent,
    BuildToolComponent,
    EasymechComponent,
    EventComponent,
    IbcComponent,
    IpaComponent,
    JsMarioComponent,
    RockTheRingComponent,
    SaComponent,
    SbbComponent,
    TesoAddonsComponent,
    TesoMapComponent,
    WgAppComponent,
    WordpressComponent,
    WuzaComponent
  ],
  providers: [
    ProjectsService,
    {
      provide: ROUTES,
      useFactory: () => {
        const routes: Routes = []
        projectRoutes().forEach((route) => {
          if(route.link && route.template) {
            routes.push({
              path: route.link,
              component: route.template
            })
          }
        })
        return [
          ...routes,
          ...standardRoutes
        ]
      },
      multi: true
    }
  ],
  imports: [
    CommonModule,
    WuzaCommonModule,
    RouterModule,
    GithubRibbonModule,
    ImageSliderModule
  ]
})
export class ProjectsModule {
}
