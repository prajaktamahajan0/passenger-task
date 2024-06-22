import { Injectable } from '@angular/core';
import { Ipassengers } from '../models/paasenger';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  passengerArr: Array<Ipassengers> = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null
  },
  {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null,
    children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
  },
  {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1491606000000,
    children: null
  },
  {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: 'Jessica', age: 1 }]
  },
  {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: null,
    children: null
  }];

  constructor(private _snackBarService: SnackbarService) { }

  getAllPassengers(): Array<Ipassengers> {
    return this.passengerArr;
  }

  updatePass(id: number, updatedName: string) {
    this.passengerArr.forEach(pass => {
      if (pass.id === id) {
        pass.fullname = updatedName
      }
    })
  }

  removePass(id: number) {
    let getIndex = this.passengerArr.findIndex(pass => pass.id === id);
    let removePass = this.passengerArr[getIndex];
    this.passengerArr.splice(getIndex, 1)
    this._snackBarService.openSnackBar('passenger ${removedPass.fullname} is removed', 'close')
  }
}
