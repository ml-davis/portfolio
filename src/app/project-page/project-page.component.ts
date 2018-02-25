import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  private subscription: any;
  private id: number;

  project: Project;

  constructor(private projectsService: ProjectsService, private route: ActivatedRoute) {}

  ngOnInit() {

    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.projectsService.getProjects().then((data) => {
      this.project = data[this.id];
    });
  }
}
