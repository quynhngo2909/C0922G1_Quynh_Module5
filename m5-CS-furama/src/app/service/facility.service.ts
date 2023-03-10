import { Injectable } from '@angular/core';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilities: Facility[] = [];

  constructor() { }

  getAll(): Facility[] {
    return  this.facilities;
  }
}
