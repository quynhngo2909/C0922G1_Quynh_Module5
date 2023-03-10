import {RentType} from './rent-type';
import {FacilityType} from './facility-type';

export interface Facility {
  id: number;
  name: string;
  area: number;
  cost: number;
  maxPeople: number;
  standardRoom: string;
  descriptionOtherConvenience: string;
  poolArea: number;
  numberOfFloor: number;
  facilityFree: string;
  rentType: RentType;
  facilityType: FacilityType;
  isExpired: boolean;

}
