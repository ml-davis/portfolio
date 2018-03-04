import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectsService {

  constructor(private http: HttpClient) {}

  getProjects(): Promise<Project[]> {
    return this.http.get<Project[]>('https://ml-davis.github.io/portfolio/assets/projects.json').toPromise();
  }
}
