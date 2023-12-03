import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', [Validators.required]],
    wantNotifications: [true, [Validators.required]],
    termsAndConditions: [false, [Validators.requiredTrue]],
  })

  public person = {
    gender: 'F',
    wantNotifications: false,
  }

  constructor(
    private fb: FormBuilder,
  ) { }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;
    this.person = newPerson;
    console.log(this.person);
    console.log(this.myForm.value);
  }

}
