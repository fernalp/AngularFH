import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-item',
  templateUrl: './gif-item.component.html',
})
export class GifItemComponent implements OnInit {

  @Input()
  public gif?: Gif;

  ngOnInit(): void {
    if (!this.gif) {
      throw new Error('Gif Property is Required');
    }
  }
}
