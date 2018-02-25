import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectsService {

  constructor(private http: HttpClient) {}

  getProjects(): Promise<Project[]> {
    return this.http.get<Project[]>('http://localhost:4200/assets/projects.json').toPromise();
  }
}
