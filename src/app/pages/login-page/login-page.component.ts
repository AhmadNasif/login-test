import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  constructor(private dataService: DataService) {}

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
