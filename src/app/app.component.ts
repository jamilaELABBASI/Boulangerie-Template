import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {DashBoardComponent} from './components/dash-board/dash-board.component';
import {DeliciousBakingComponent} from './components/delicious-baking/delicious-baking.component';
import {OurBreadsComponent} from './components/our-breads/our-breads.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, DashBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'boulangerie';
}
