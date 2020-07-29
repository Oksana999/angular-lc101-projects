// @ts-ignore
import { Component, OnInit } from '@angular/core';

// @ts-ignore
@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [ 'Clean the house'];
   finishedChores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries', 'Clean the house'];

   /* trophyImage = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';*/
     trophyImage = 'https://st2.depositphotos.com/1032712/5873/i/450/depositphotos_58737691-stock-photo-gold-cup-winner-trophy-3d.jpg';

   constructor() { }

   ngOnInit() {
   }

}
