import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "Remaining", saldo: 800, date: 10-2019 },
      {
        id: 12,
        name: "Savings",
        saldo: 500
      },
      {
        id: 15,
        name: "Fixed Charges",
        saldo: 1100
      },
      {
        id: 16,
        name: "Food",
        saldo: 400
      }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}
