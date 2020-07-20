import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jacob Test';

  //Instantiate game
  game: Game = {
    id: 1,
    title: 'Jenga'
  };

  BOOKS: Book[] = [
    { id: 100, title: 'Lord Of The Rings', author: 'Tolkien' },
    { id: 101, title: 'Harry Potter', author: 'J.K Rowling' },
    { id: 102, title: 'The Richest Man In Babylon', author: 'George Samuel Clason' }
  ];

  //Get selected book
  selectedBook: Book;
  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}

//Create a new game class
export class Game {
  id: number;
  title: string;
}

//Create a new book class
export class Book {
  id: number;
  title: string;
  author: string;
}
