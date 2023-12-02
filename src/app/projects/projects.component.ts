import { Component } from '@angular/core'
import {ProjectsService} from './projects.service'

@Component({
  selector: 'wuza-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {

  get projects() {
    return this.projectsService.projects
  }
  constructor(private projectsService: ProjectsService) { }

}
