import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [
    {id: 1, name: 'John Doe', date: new Date('2023-04-18')},
    {id: 2, name: 'Jane Doe', date: new Date('2023-04-17')},
    {id: 3, name: 'Bob Smith', date: new Date('2023-04-16')},
    {id: 4, name: 'Alice Jones', date: new Date('2023-04-15')},
    {id: 5, name: 'Tom Brown', date: new Date('2023-04-14')},
    {id: 1, name: 'John Doe', date: new Date('2023-04-18')},
    {id: 2, name: 'Jane Doe', date: new Date('2023-04-17')},
    {id: 3, name: 'Bob Smith', date: new Date('2023-04-16')},
    {id: 4, name: 'Alice Jones', date: new Date('2023-04-15')},
    {id: 5, name: 'Tom Brown', date: new Date('2023-04-14')}
  ];

  constructor() { }

  getData() {
    return this.data;
  }
}
