import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HabitsComponent } from './components/habits/habits.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { ProductivityComponent } from './components/productivity/productivity.component';
import { Productivity2Component } from './components/productivity2/productivity2.component';
import { Productivity3Component } from './components/productivity3/productivity3.component';
import { Productivity4Component } from './components/productivity4/productivity4.component';
import { Productivity5Component } from './components/productivity5/productivity5.component';
import { Productivity6Component } from './components/productivity6/productivity6.component';
import { Productivity7Component } from './components/productivity7/productivity7.component';
import { Productivity8Component } from './components/productivity8/productivity8.component';
import { Productivity9Component } from './components/productivity9/productivity9.component';
import { Productivity10Component } from './components/productivity10/productivity10.component';
import { Productivity11Component } from './components/productivity11/productivity11.component';
import { Productivity12Component } from './components/productivity12/productivity12.component';
import { Productivity13Component } from './components/productivity13/productivity13.component';
import { Productivity14Component } from './components/productivity14/productivity14.component';
import { Productivity15Component } from './components/productivity15/productivity15.component';
import { Productivity16Component } from './components/productivity16/productivity16.component';
import { Productivity17Component } from './components/productivity17/productivity17.component';
import { Productivity18Component } from './components/productivity18/productivity18.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'routines', component: HabitsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'courses/productivity', component: ProductivityComponent },
  { path: 'courses/productivity/02', component: Productivity2Component },
  { path: 'courses/productivity/03', component: Productivity3Component },
  { path: 'courses/productivity/04', component: Productivity4Component },
  { path: 'courses/productivity/05', component: Productivity5Component },
  { path: 'courses/productivity/06', component: Productivity6Component },
  { path: 'courses/productivity/07', component: Productivity7Component },
  { path: 'courses/productivity/08', component: Productivity8Component },
  { path: 'courses/productivity/09', component: Productivity9Component },
  { path: 'courses/productivity/10', component: Productivity10Component },
  { path: 'courses/productivity/11', component: Productivity11Component },
  { path: 'courses/productivity/12', component: Productivity12Component },
  { path: 'courses/productivity/13', component: Productivity13Component },
  { path: 'courses/productivity/14', component: Productivity14Component },
  { path: 'courses/productivity/15', component: Productivity15Component },
  { path: 'courses/productivity/16', component: Productivity16Component },
  { path: 'courses/productivity/17', component: Productivity17Component },
  { path: 'courses/productivity/18', component: Productivity18Component },
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    HabitsComponent,
    ProfileComponent,
    NavmenuComponent,
    ProductivityComponent,
    Productivity2Component,
    Productivity3Component,
    Productivity4Component,
    Productivity5Component,
    Productivity6Component,
    Productivity7Component,
    Productivity8Component,
    Productivity9Component,
    Productivity10Component,
    Productivity11Component,
    Productivity12Component,
    Productivity13Component,
    Productivity14Component,
    Productivity15Component,
    Productivity16Component,
    Productivity17Component,
    Productivity18Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
