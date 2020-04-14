import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: Array<any> = []

  constructor() { }

  ngOnInit() {
    this.images = [
      {
        "title": "sa",
        "url": "../../assets/images/gif/SA.gif"
      },
      {
        "title": "dg",
        "url": "../../assets/images/gif/DG.gif"
      },
      {
        "title": "ag",
        "url": "../../assets/images/gif/AG.gif"
      },
      {
        "title": "sb",
        "url": "../../assets/images/gif/SB.gif"
      },
      {
        "title": "xo",
        "url": "../../assets/images/gif/xo.gif"
      },
      {
        "title": "22",
        "url": "../../assets/images/gif/22.gif"
      },
      {
        "title": "sp",
        "url": "../../assets/images/gif/sp.gif"
      },
      {
        "title": "ds",
        "url": "../../assets/images/gif/ds.gif"
      },
      {
        "title": "ab",
        "url": "../../assets/images/gif/ab.gif"
      }
    ]
  }

}
