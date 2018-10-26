import { Component } from '@angular/core';
import { KingdomService } from './kingdom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public kingdom: KingdomService) {}
}
