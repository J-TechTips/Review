import { Sedan } from './Vehicle/vehicle.module';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

 honda: Sedan = new Sedan('Honda', 'Civic', 1997);
 ford: Sedan = new Sedan('Ford', 'F100', 1997);


  ngOnInit() {
    console.log(this.honda);
    console.log(this.ford);
  }
}
