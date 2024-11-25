import { Component } from '@angular/core';
import {DeliciousBakingComponent} from '../delicious-baking/delicious-baking.component';
import {OurBreadsComponent} from '../our-breads/our-breads.component';
import {ContactComponent} from "../contact/contact.component";

@Component({
  selector: 'app-dash-board',
  standalone: true,
    imports: [
        DeliciousBakingComponent,
        OurBreadsComponent,
        ContactComponent
    ],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {

}
