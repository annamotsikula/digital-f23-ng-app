import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  email: string = ""
  password: string = ""
  // form: FormGroup = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // })

  constructor(private _router: Router, private _auth: AuthService) {}

  onSignIn(form: NgForm) {
    const { email, password, rememberUser } = form.value
    // console.log(form.value)

    if(email !== "" && password !== "") {
      this._auth.authUser({ username: email, password, rememberUser})
      .subscribe(result => {
        // console.log(result)
        this._router.navigate(['main'])
      })
    } else {
      alert('Please Fill all the fields')
    }
  }

}
