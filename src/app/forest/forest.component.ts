import { Component, OnInit } from '@angular/core';
import { KingdomService } from '../kingdom.service';

@Component({
  selector: 'app-forest',
  templateUrl: './forest.component.html',
  styleUrls: ['./forest.component.css'],
  providers: [{ provide: KingdomService, useValue: { name: '🍩'} }]
})
export class ForestComponent implements OnInit {

  constructor(public kingdom: KingdomService) { }

  ngOnInit() {
  }

}
