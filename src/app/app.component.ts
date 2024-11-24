import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DashBoardComponent} from './components/dash-board/dash-board.component';
import {ContactComponent} from './components/contact/contact.component';
import {DeliciousBakingComponent} from './components/delicious-baking/delicious-baking.component';
import {OurBreadsComponent} from './components/our-breads/our-breads.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashBoardComponent, ContactComponent, DeliciousBakingComponent, OurBreadsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'boulangerie';
}
