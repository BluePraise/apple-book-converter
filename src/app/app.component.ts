import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  result: number;
  enteredNumberAB: string;
  enteredNumberBook: string;
  showResult: false;
  onInputAB(value: string) {
    // console.log(value);
    this.enteredNumberAB = value
    /*
    if (value === this.randomtText) {
      this.solved = true;
    }
    */
  }
  onInputBook(value: string) {
    // console.log(value);
    this.enteredNumberBook = value
    /*
    if (value === this.randomtText) {
      this.solved = true;
    }
    */
  }

  calculateResult() {
    const abCurrent = parseInt(this.enteredNumberAB);
    const bookTotalPages = parseInt(this.enteredNumberBook);
    let pageCount = Math.round(bookTotalPages / 100 * abCurrent);
    console.log(pageCount);
    this.result = pageCount;
  }
}

