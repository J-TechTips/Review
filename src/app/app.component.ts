import { Component, OnInit } from '@angular/core';

interface Fighter {
  name: string;
  number: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  fighter1: Fighter = {name: 'Jim', number: 10};
  fighter2: Fighter = {name: 'Freddy', number: 20};

  ngOnInit() {
    console.log(this.fighter1, this.fighter2);
  }
}
