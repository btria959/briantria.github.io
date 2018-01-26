import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component'
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {path: "", component: AboutMeComponent},
  {path: "projects", component: ProjectsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }