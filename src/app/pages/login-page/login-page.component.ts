import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  user = {
    username:'',
    email: '',
    password: ''
  };

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted', this.user);
    } else {
      console.log('Form is invalid');
    }
  }

}
