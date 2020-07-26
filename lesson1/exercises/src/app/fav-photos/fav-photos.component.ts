import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos of the city of the future';
  image1 = 'https://realty.mail.ru/news-img/5301553a525614a32/940/515/1/';
  image2 = 'https://inhabitat.com/wp-content/blogs.dir/1/files/2012/06/megatropolis-city-in-the-sky-hrama-10.png';
  image3 = 'https://web-japan.org/niponica/images/ja/niponica13/feature05-01.jpg';

  constructor() { }

  ngOnInit() {
  }

}
