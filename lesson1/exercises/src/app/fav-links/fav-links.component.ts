import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks = ["https://www.w3schools.com/js/default.asp",
    "https://www.w3.org/Style/Examples/007/center.ru.tmpl#block",
     "https://oksana999.github.io/index.html"]

  constructor() { }

  ngOnInit() {
  }

}
