import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  btc: number;

  constructor(private heroService: HeroService) {
    this.btc = 1;
   }

  ngOnInit() {
    this.getHeroes();
    this.test();
  }

  test(){
    fetch('https://blockchain.info/tobtc?currency=EUR&value=1', {
     method: 'GET'
 })
  .then(response => response.json())
   .then(data => {
     console.log(data)
      this.btc = data;
    })
   .catch(error => console.error(error))
   }

  //TOPVIERHERO'S
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}