import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): Customer[] {
    return  this.customerService.getAll();
  }
}
