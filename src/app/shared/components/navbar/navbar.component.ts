import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent {
  @Input() extraClass = '';
  @Input() rounded = false;
  @Input() border = false;
  @Input() fluid = false;
}
