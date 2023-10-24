import { Component } from '@angular/core';
import { SidebarOptions } from '../../interface/sidebar.interface';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  public items: SidebarOptions[] = [
    {
      label: "Buscar por capital",
      link: "countries/by-capital"
    },
    {
      label: "Buscar por país",
      link: "countries/by-country"
    },
    {
      label: "Buscar por región",
      link: "countries/by-region"
    },
  ]

}
