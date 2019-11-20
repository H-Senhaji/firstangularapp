import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "Remaining" },
      {
        id: 12,
        name: "Clothing",
        url:
          "https://naambordencentrale.nl/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/i/pictogram-garderobe_1.png",
        saldo: 500
        },
      {
        id: 15,
        name: "Household",
        url:
          "https://naambordencentrale.nl/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/9/4939_23_gen_a_2008.jpg",
        saldo: 130
        },
      {
        id: 16,
        name: "Food",
        url:
          "https://naambordencentrale.nl/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/i/pictogram-restaurant.png",
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
