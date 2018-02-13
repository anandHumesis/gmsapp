import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() menuClicked = new EventEmitter<MouseEvent>();

  constructor() { }

  handleClick(mouseEvent: MouseEvent) {
    this.menuClicked.emit(mouseEvent);
  }

}
