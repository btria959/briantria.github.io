import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component'
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';

export const ROUTES: Routes = [
  {
    path: "",
    component: AboutMeComponent,
    data: {title: 'Home'}
  },
  {
    path: "projects",
    component: ProjectsComponent,
    data: {title: 'Projects'}},
  {
    path: "experience",
    component: ExperienceComponent,
    data: {title: 'Experience'}},
  {
    path: "education",
    component: EducationComponent,
    data: {title: 'Education'}}
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }