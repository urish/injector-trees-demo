import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MushroomComponent } from './mushroom/mushroom.component';
import { FlowersModule } from './flowers/flowers.module';
import { KingdomService } from './kingdom.service';

@NgModule({
  declarations: [
    AppComponent,
    MushroomComponent
  ],
  imports: [
    BrowserModule,
    FlowersModule,
  ],
  providers: [{ provide: KingdomService, useFactory: () => new KingdomService('🦖') }],
  bootstrap: [AppComponent]
})
export class AppModule { }
