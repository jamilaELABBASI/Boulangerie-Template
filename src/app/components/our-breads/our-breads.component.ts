import { Component } from '@angular/core';
import {DashBoardComponent} from '../dash-board/dash-board.component';

@Component({
  selector: 'app-our-breads',
  standalone: true,
  imports: [
    DashBoardComponent
  ],
  templateUrl: './our-breads.component.html',
  styleUrl: './our-breads.component.css'
})
export class OurBreadsComponent {

}
