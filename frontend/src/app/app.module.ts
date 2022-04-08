import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HabitsComponent } from './components/habits/habits.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'routines', component: HabitsComponent },
  { path: 'profile', component: ProfileComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    HabitsComponent,
    ProfileComponent,
    NavmenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
