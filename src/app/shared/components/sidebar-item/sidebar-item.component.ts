import { Component, Input } from '@angular/core';
import { SidebarOptions } from '../../interface/sidebar.interface';

@Component({
  selector: 'shared-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styles: [
  ]
})
export class SidebarItemComponent {

  @Input()
  public items: SidebarOptions[] = [];

  @Input()
  public href: string = "";


}
