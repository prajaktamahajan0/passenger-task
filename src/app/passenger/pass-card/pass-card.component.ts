import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassengers } from 'src/app/shared/models/paasenger';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
  @Input() passObj !: Ipassengers;
  isEditable: boolean = false;
  @Output() emitPassInfo: EventEmitter<Ipassengers> = new EventEmitter<Ipassengers>()

  constructor(private _passengerService: PassengerService){}

  ngOnInit(): void {}

  onUpdate(fullname: string) {
    console.log(fullname);
    this._passengerService.updatePass(this.passObj.id, fullname)
  }

  onRemovePass() {
    this.emitPassInfo.emit(this.passObj)
  }
}
