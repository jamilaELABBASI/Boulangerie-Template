import { Routes } from '@angular/router';
import {DashBoardComponent} from './components/dash-board/dash-board.component';
import {OurBreadsComponent} from './components/our-breads/our-breads.component';
import {DeliciousBakingComponent} from './components/delicious-baking/delicious-baking.component';

export const routes: Routes = [
  {path:'',component:DashBoardComponent},
  {path:'delicious_baking',component:DeliciousBakingComponent},
  {path:'ours_breads',component:OurBreadsComponent},



];
