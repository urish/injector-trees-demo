import { Component } from '@angular/core';
import { KingdomService } from './kingdom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: KingdomService, useValue: { name: '🍕'} }]
})
export class AppComponent {
  constructor(public kingdom: KingdomService) {}
}
