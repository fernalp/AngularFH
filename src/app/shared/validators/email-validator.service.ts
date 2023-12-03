import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {



  constructor() { }
  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {

    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) => {
      console.log(email);

      if (email === 'fernando@fernando.com') {
        subscriber.next({ invalidEmail: true });
        subscriber.complete();
        return;
      }

      subscriber.next(null);
      subscriber.complete();
    });

    return httpCallObservable;

    // console.log(email)

    // return of({
    //   emailTaken: true,
    // })

  }

}
