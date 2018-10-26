import { Injectable } from '@angular/core';

@Injectable()
export class KingdomService {
  constructor(public name = '🦖') {
    console.log(`Kingdom created: ${name}`);
  }
}

export function createKingdom(name: string) {
  return new KingdomService(name);
}
