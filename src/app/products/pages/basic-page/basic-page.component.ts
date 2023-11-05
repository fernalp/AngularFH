import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameLower: string = 'fernando almanza';
  public nameUpper: string = 'FERNANDO ALMANZA';
  public fullName: string = 'FeRnAnDo aLmANzA';

  public customDate: Date = new Date();

}
