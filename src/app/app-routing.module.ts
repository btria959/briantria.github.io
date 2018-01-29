import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component'
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  {path: "", component: AboutMeComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "experience", component: ExperienceComponent},
  {path: "education", component: EducationComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }