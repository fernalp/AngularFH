import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi Primera App de Angular';
  public counter: number = 10;

  increaseBy(value: number = 1): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
