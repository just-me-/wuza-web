import {Injectable} from '@angular/core'
import {projects, WuzaProject, WuzaProjectRoute} from './projects'

@Injectable()
export class ProjectsService {

  get projects(): WuzaProject[] {
    return projects
  }
}
