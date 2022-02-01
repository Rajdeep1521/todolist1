import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name='Rajdeep Saha'
  dogCount=1;
  addDog(){
    this.dogCount+=1
  }
}
