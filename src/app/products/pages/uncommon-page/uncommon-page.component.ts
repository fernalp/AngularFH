import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = "Fernando";
  public gender: 'male' | 'female' = "male";
  public invitationMap = {
    male: "invitarlo",
    female: "invitarla",
  }

  changeClient(): void {
    this.name = "Julissa";
    this.gender = "female";
  }

  // i18n Plural

  public clients: string[] = [
    "María",
    "José",
    "Lucas",
    "Laura",
    "Santiago",
    "Ana",
    "Mateo",
    "Nicolás",
    // "Cristina",
    // "Felipe",
    // "Gabriel",
    // "Rebeca",
    // "Diego",
    // "Carolina",
    // "Andrés",
  ]
  public clientsMap = {
    '=0': "no tenemos ningún cliente esperando.",
    '=1': "tenemos un cliente esperando.",
    'other': "tenemos # clientes esperando.",
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue - Json

  public person = {
    name: "Fernando",
    age: 25,
    address: "Barranquilla, Atlántico",
  }

  //Async

  public myObservableTimer: Observable<number> = interval(2000);

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tenemos data en la promesa")
    }, 1500)
  })

}
