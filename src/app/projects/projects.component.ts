import { Component, OnInit } from '@angular/core'
import {ProjectsService} from './projects.service'

@Component({
  selector: 'wuza-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  get projects() {
    return this.projectsService.projects
  }
  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
  }

}
