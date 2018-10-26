import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MushroomComponent } from './mushroom/mushroom.component';
import { ForestComponent } from './forest/forest.component';

@NgModule({
  declarations: [
    AppComponent,
    MushroomComponent,
    ForestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
