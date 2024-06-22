import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ipassengers } from 'src/app/shared/models/paasenger';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-passenger-dash-board',
  templateUrl: './passenger-dash-board.component.html',
  styleUrls: ['./passenger-dash-board.component.scss']
})

export class PassengerDashBoardComponent implements OnInit {
  passArr: Array<Ipassengers> = [];
  checkInCount !: number;
  constructor(
    private _passengerService: PassengerService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.passArr = this._passengerService.getAllPassengers();
    this.getCheckInCount()
  }

  getCheckInCount() {
    this.checkInCount = this.passArr.filter((pass: Ipassengers) => pass.checkedIn).length;
  }

  onRemove(pass: any) {
    console.log(pass);

    this._passengerService.removePass(pass.id)
    this.getCheckInCount();
    this._snackBar.open(`The passenger ${pass.fullname} is removed`, "Close", {
      duration : 3000,
      horizontalPosition : 'left',
      verticalPosition : 'top'
    })
  }
}
