import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contracts: Contract[] = [];

  constructor() {
  }

  getAll(): Contract[] {
    return this.contracts;
  }
}
