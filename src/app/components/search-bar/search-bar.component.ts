import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() enteredText: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onKeyup(event: KeyboardEvent) {
    this.enteredText.emit((event.target as HTMLInputElement).value);
  }

}
