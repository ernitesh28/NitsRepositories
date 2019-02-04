import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  textBoxes: string[]

  constructor() {
    this.textBoxes = [""]
  }

  addTextBox() {
    this.textBoxes.push("")     
  }

  deleteTextBox(index){
    this.textBoxes.splice(index,1)
  }

}