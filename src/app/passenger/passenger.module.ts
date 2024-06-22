import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PassengerDashBoardComponent } from "./passenger-dash-board/passenger-dash-board.component";
import { PassCountComponent } from "./pass-count/pass-count.component";
import { PassCardComponent } from "./pass-card/pass-card.component";


@NgModule({
   declarations: [
      PassengerDashBoardComponent,
      PassCountComponent,
      PassCardComponent
   ],
   imports: [CommonModule],
   exports: [PassengerDashBoardComponent],
   providers: []
})

export class PassengerModule {

}