import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  email: string = ""
  password: string = ""
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private _router: Router) {}

  onSignIn(form: NgForm) {
    console.log(form)

    // if(this.form.value.email !== "" && this.form.value.password !== "") {
    //   this._router.navigate(['main'])
    // } else {
    //   alert('Please Fill all the fields')
    // }
  }

}
