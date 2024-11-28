import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {DashBoardComponent} from './components/dash-board/dash-board.component';
import {DeliciousBakingComponent} from './components/delicious-baking/delicious-baking.component';
import {OurBreadsComponent} from './components/our-breads/our-breads.component';

import { Router, NavigationEnd } from '@angular/router';  // <-- Ensure correct imports
import { filter } from 'rxjs/operators';
import {CommonModule} from '@angular/common';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';  // <-- This is necessary for the filter operator

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, DashBoardComponent,CommonModule, DeliciousBakingComponent, OurBreadsComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'boulangerie';
  showDashboard: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscribe to router events to detect route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Trigger on NavigationEnd events
    ).subscribe((event: NavigationEnd) => {
      // Check if the current route is 'register'
      this.showDashboard = event.url !== '/register' && event.url!=='/connect' // Hide dashboard if the route is 'register'
    });
  }

}
