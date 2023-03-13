import { Injectable } from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];

  constructor() { }
  getAll(): Customer[] {
    return  this.customers;
  }
}
