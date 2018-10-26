import { Component } from '@angular/core';
import { KingdomService, createKingdom } from './kingdom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [{provide: KingdomService, useFactory: () => createKingdom('🍕')}],
})
export class AppComponent {
  constructor(public kingdom: KingdomService) {}
}
