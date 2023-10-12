import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

type SignUp = {
  firstName: FormControl<string|null>;
  lastName: FormControl;
  age: FormControl;
  personalId: FormControl;
  address: FormGroup;
  contact:  FormArray;
  email?: FormControl;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm: FormGroup

  inputText: string = ""

  constructor() {
    this.signUpForm = new FormGroup<SignUp>({
      firstName: new FormControl('John', { nonNullable: true }),
      lastName: new FormControl<string|null>(null, [Validators.required]),
      age: new FormControl<number>(5, [Validators.required, Validators.min(18)]),
      personalId: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl()
      }),
      contact: new FormArray([
        new FormGroup({
          contactType: new FormControl(),
          contactValue: new FormControl()
        }),
        new FormGroup({
          contactType: new FormControl(),
          contactValue: new FormControl()
        })
      ])
    })

  
   
    // this.signUpForm.setValue() // მთლიანი ფორმის განახლება
    // this.signUpForm.patchValue() // რომელიმე ველის განახლება
  }

  submit() {
    if(this.signUpForm.valid) {
      console.log(this.signUpForm.value);
  
    } else {
      alert("The form is not valid")
    }
  }

  updateValue() {
    console.log(`Filled Value: ${this.inputText}`)
    this.signUpForm.get('address')?.patchValue({
      street: this.inputText
      // city: 'Tbilisi'
    })
  }

  reset() {
    this.signUpForm.reset();
    console.log(this.signUpForm.value)
  }
  addNewContact() {
    const newContactGroup = new FormGroup({
      contactType: new FormControl(),
      contactValue: new FormControl()
    })
    this.contactArray.push(newContactGroup)

  }

  addNewControl(name: string, value: string | null = null) {
    this.signUpForm.addControl(name, new FormControl(value))
  }
  get contactArray() {
    return this.signUpForm.controls['contact'] as FormArray
  }
  get lastname() {
    return this.signUpForm.get('lastName') as FormControl
  }

  get personalId() {
    return this.signUpForm.get('personalId') as FormControl

  }
}
