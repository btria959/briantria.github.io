import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutMeComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
