import { Routes } from '@angular/router';
import {DashBoardComponent} from './components/dash-board/dash-board.component';
import {OurBreadsComponent} from './components/our-breads/our-breads.component';
import {DeliciousBakingComponent} from './components/delicious-baking/delicious-baking.component';
import {RegisterComponent} from './components/register/register.component';
import {ConnectComponent} from './components/connect/connect.component';

export const routes: Routes = [
  {path:'delicious_baking',component:DeliciousBakingComponent},
  {path:'ours_breads',component:OurBreadsComponent},
  {path:'register',component:RegisterComponent},
  {path:'connect',component:ConnectComponent},



];
