import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaisyComponent } from './daisy/daisy.component';
import { KingdomService, createKingdom } from '../kingdom.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [{ provide: KingdomService, useFactory: () => createKingdom('🏡') }],
  declarations: [DaisyComponent],
  exports: [DaisyComponent],
})
export class FlowersModule { }
