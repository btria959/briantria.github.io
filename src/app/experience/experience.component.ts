import { Component, OnInit } from '@angular/core';
import { EMPLOYMENTS, VOLUNTARIES, Experience } from '../_object-classes/experience'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  employments: Experience[] = EMPLOYMENTS;
  voluntaries: Experience[] = VOLUNTARIES;

  constructor() { }

  ngOnInit() {
  }

}
