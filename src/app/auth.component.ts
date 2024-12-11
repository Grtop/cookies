import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./app.component.css']
})

export class LoginComponent {
form: any;
confirmOrder() {
throw new Error('Method not implemented.');
}
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {

    console.log(this.loginForm.value);
  }
}
