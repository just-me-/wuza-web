import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProjectsComponent } from './projects.component'
import { ProjectComponent } from './project/project.component'
import {ProjectsService} from './projects.service'
import {RouterModule, ROUTES, Routes} from '@angular/router'

const standardRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProjectsComponent
  }
]

@NgModule({
  declarations: [ProjectsComponent, ProjectComponent],
  providers: [
    ProjectsService,
    {
      provide: ROUTES,
      useFactory: () => {
        const routes: Routes = []

        routes.push({
          path: 'tmp',
          component: ProjectsComponent
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
    RouterModule
  ]
})
export class ProjectsModule { }
