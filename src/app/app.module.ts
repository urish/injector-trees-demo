import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MushroomComponent } from './mushroom/mushroom.component';
import { KingdomService } from './kingdom.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MushroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [{ provide: KingdomService, useFactory: () => new KingdomService('🦖') }],
  bootstrap: [AppComponent]
})
export class AppModule { }
