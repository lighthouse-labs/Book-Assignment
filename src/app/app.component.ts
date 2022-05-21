import { Component } from '@angular/core';
import { Book } from './models/book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'class-5';

  books: Book[] = [
    { name: 'Harry Potter and the Philosopher\'s Stone', image: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg' },
    { name: 'The Hobbit', image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1371834025l/17157681.jpg' },
    { name: 'Treasure Island', image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1485248909l/295.jpg' },
    { name: 'Moby Dick', image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327940656l/153747.jpg' },
    { name: 'A Tale of Two Cities', image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/a-tale-of-two-cities-book-cover-movie-poster-art-1-nishanth-gopinathan.jpg' },
    { name: 'The Alchemist', image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466865542l/18144590._SY475_.jpg' },
    { name: 'Great Expectations', image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388460766l/6856992.jpg' },
    { name: 'Robinson Crusoe', image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328860183l/820923.jpg' },
    { name: 'Frankenstein', image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388363952l/35266.jpg' },
  ];

  filteredBooks: Book[] = this.books; // initial value for filteredBooks is the entire book list


  onSearch(text: string) {

    // if the user enters text, we want to filter the books so that we only show
    // the books that have the text entered by the user
    // Example: if the user enters "the" it should show
    // Harry Potter and the Philospher's Stone
    // The Hobbit
    // The Alchemist
    if (text !== "") {
      this.filteredBooks = this.books.filter(book => {
        const lowerCaseText = text.toLowerCase();
        const lowerCaseBookName = book.name.toLowerCase();
        return lowerCaseBookName.includes(lowerCaseText);
      })
    } else {
      // if the user has not entered anything, it should show the full list
      // of books;
      this.filteredBooks = this.books;
    }
  }
}
