import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../../service/facility.service';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-facility',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility[];

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): Facility[] {
    return this.facilities = this.facilityService.getAll();
  }
}
