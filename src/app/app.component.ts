import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primera aplicación';
  public counter: number =  20;

  increaseBy(value:number):void {
    this.counter+= value;
  }

  reset():void {
    this.counter= 10;
  }

}
