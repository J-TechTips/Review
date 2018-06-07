import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  wins: number = 5;
  open: boolean = false;
  sentence: string = 'Hello, its me mario';
  u: undefined = undefined;
  n: null = null;
}
