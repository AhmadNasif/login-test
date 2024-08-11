import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private mockData = [
    { id: 1, name: 'Item 1', password: 'This is item 1' },
    { id: 2, name: 'Item 2', password: 'This is item 2' },
    { id: 3, name: 'Item 3', password: 'This is item 3' }
  ];

  constructor() { }

  getItems(): Observable<any[]> {
    return of(this.mockData);
  }

  //get a single item by id
  getItemById(id: number): Observable<any> {
    const item = this.mockData.find(item => item.id === id);
    return of(item);
  }

  //add a new item
  addItem(item: any): Observable<any> {
    this.mockData.push({ ...item, id: this.mockData.length + 1 });
    return of(item);
  }

  //delete an item by id
  deleteItem(id: number): Observable<any> {
    this.mockData = this.mockData.filter(item => item.id !== id);
    return of({ success: true });
  }
  
}
