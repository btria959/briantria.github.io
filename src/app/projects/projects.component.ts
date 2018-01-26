import { Component, OnInit } from '@angular/core';
import { Project } from '../project'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  // TODO: fetch from db (firebase? google sheets?)
  projects: Project[] = [
    {
      name: 'MLB Line Drive',
      role: "Lead Software Developer",
      links: [
        {
          platform: "Android", 
          url: "https://play.google.com/store/apps/details?id=com.mlb.SlamCity15&hl=en"
        },
        {
          platform: "iOS",
          url: "https://itunes.apple.com/us/app/mlb-com-line-drive/id992156829?mt=8"
        }
      ]
    },
    {
      name: "Yu Gi Oh! Duel Generation",
      role: "Frontend Software Developer",
      links: [
        {
          platform: "Android", 
          url: "https://play.google.com/store/apps/details?id=com.konami.ygodgtest&hl=en"
        },
        {
          platform: "iOS",
          url: "https://itunes.apple.com/us/app/yu-gi-oh-duel-generation/id883078087?mt=8"
        }
      ]
    },
    {
      name: "Tinted",
      role: "Frontend Software Developer",
      links: [
        {
          platform: "Android", 
          url: "https://play.google.com/store/apps/details?id=com.lbstudios.tinted&hl=en"
        }
      ]
    },
    {
      name: "Throw with Joe",
      role: "Full Stack Software Developer",
      links: [
        {
          platform: "iOS (Review)", 
          url: "https://www.tapscape.com/throw-with-joe-iphone-game-review/"
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
