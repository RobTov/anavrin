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
    Productivity9Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
