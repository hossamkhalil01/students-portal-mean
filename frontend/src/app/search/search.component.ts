import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchKey: string = '';
  constructor() {}

  @Output() onUserInput: EventEmitter<String> = new EventEmitter();

  ngOnInit(): void {}

  handleUserSearch(event: any): void {
    this.searchKey = event.target.value;
    if (this.searchKey === '') return;
    this.onUserInput.emit(this.searchKey);
  }
}
