import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  userForm: FormGroup;
  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  user = {
    username:'',
    email: '',
    password: ''
  };

  items: any[] = [];

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted', this.user);
    } else {
      console.log('Form is invalid');
    }
  }

  onSubmitReactive(): void {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.dataService.getItems().subscribe((data: any[]) => {
      this.items = data;
    });
  }

  addItem(name: any, password: any): void {
    const newItem = { name: name , password: password };
    this.dataService.addItem(newItem).subscribe(() => {
      this.loadItems();
    });
    console.log(newItem);
  }

  deleteItem(id: number): void {
    this.dataService.deleteItem(id).subscribe(() => {
      this.loadItems();
    });
  }

}
