import { Component, OnInit } from '@angular/core';
import { StaticInjector } from '@angular/core/src/di/injector';

 class CarBrand {
  protected make: string;
  constructor(theMake: string) {
    this.make = theMake;
  }
}
class Honda extends CarBrand {
  private year: number;
  protected model: string;
  constructor(year: number, make: string, model: string) {
    super(make);
    this.year = year;
    this.model = model;

  }
  getDetails(x) {
    return `Buy the all new ${this.year} ${this.make} ${this.model} `;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ford: CarBrand = new CarBrand ('Ford');
  ngOnInit() {
    this.theseCars();

  }
  theseCars() {
    const f = new Honda(2777, 'Honda', 'Acord');
    console.log(f.getDetails());
  }
}
