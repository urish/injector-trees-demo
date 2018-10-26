import { Component, OnInit } from '@angular/core';
import { KingdomService } from '../kingdom.service';

@Component({
  selector: 'app-mushroom',
  templateUrl: './mushroom.component.html',
  styleUrls: ['./mushroom.component.css']
})
export class MushroomComponent implements OnInit {

  constructor(public kingdom: KingdomService) { }

  ngOnInit() {
  }

}
