import {Injectable} from '@angular/core'
import {projects, WuzaProject} from './projects'

@Injectable()
export class ProjectsService {

  get projects(): WuzaProject[] {
    return projects
  }
}
