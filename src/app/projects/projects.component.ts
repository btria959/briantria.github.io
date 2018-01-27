import { Component, OnInit } from '@angular/core';
import { Project, PROJECTS } from '../_object-classes/project'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  // TODO: fetch from db (firebase? google sheets?)
  projects: Project[] = PROJECTS;

  constructor() { }

  ngOnInit() {
  }

}
