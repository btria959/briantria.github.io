import { Component, OnInit } from '@angular/core';
import { Section } from '../_object-classes/section'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  sections: Section[] = [
    {
      name: "Projects",
      url: ""
    },
    {
      name: "Work Experience",
      url: ""
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
