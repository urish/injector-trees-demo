import { Component, OnInit } from '@angular/core';
import { KingdomService } from 'src/app/kingdom.service';

@Component({
  selector: 'app-daisy',
  templateUrl: './daisy.component.html',
  styleUrls: ['./daisy.component.css']
})
export class DaisyComponent implements OnInit {

  constructor(public kingdom: KingdomService) { }

  ngOnInit() {
  }

}
