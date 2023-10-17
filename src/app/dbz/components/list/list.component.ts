import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      id: "",
      name: "Trunks",
      power: 10
    }
  ];

  @Output()
  public onDeleteCharacterById: EventEmitter<string> = new EventEmitter();



  onDeleteCharacter(id: string): void {
    // TODO: Emitir el ID del personaje
    this.onDeleteCharacterById.emit(id);
  }


}
