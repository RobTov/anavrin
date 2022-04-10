import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HabitsComponent } from './components/habits/habits.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { ProductivityComponent } from './components/productivityCourse/productivity/productivity.component';
import { Productivity2Component } from './components/productivityCourse/productivity2/productivity2.component';
import { Productivity3Component } from './components/productivityCourse/productivity3/productivity3.component';
import { Productivity4Component } from './components/productivityCourse/productivity4/productivity4.component';
import { Productivity5Component } from './components/productivityCourse/productivity5/productivity5.component';
import { Productivity6Component } from './components/productivityCourse/productivity6/productivity6.component';
import { Productivity7Component } from './components/productivityCourse/productivity7/productivity7.component';
import { Productivity8Component } from './components/productivityCourse/productivity8/productivity8.component';
import { Productivity9Component } from './components/productivityCourse/productivity9/productivity9.component';
import { Productivity10Component } from './components/productivityCourse/productivity10/productivity10.component';
import { Productivity11Component } from './components/productivityCourse/productivity11/productivity11.component';
import { Productivity12Component } from './components/productivityCourse/productivity12/productivity12.component';
import { Productivity13Component } from './components/productivityCourse/productivity13/productivity13.component';
import { Productivity14Component } from './components/productivityCourse/productivity14/productivity14.component';
import { Productivity15Component } from './components/productivityCourse/productivity15/productivity15.component';
import { Productivity16Component } from './components/productivityCourse/productivity16/productivity16.component';
import { Productivity17Component } from './components/productivityCourse/productivity17/productivity17.component';
import { Productivity18Component } from './components/productivityCourse/productivity18/productivity18.component';

import { Study1Component } from './components/studyCourse/study1/study1.component';
import { Study2Component } from './components/studyCourse/study2/study2.component';
import { Study3Component } from './components/studyCourse/study3/study3.component';
import { Study4Component } from './components/studyCourse/study4/study4.component';
import { Study5Component } from './components/studyCourse/study5/study5.component';
import { Study6Component } from './components/studyCourse/study6/study6.component';
import { Study7Component } from './components/studyCourse/study7/study7.component';
import { Study8Component } from './components/studyCourse/study8/study8.component';
import { Study9Component } from './components/studyCourse/study9/study9.component';
import { Study10Component } from './components/studyCourse/study10/study10.component';
import { Study11Component } from './components/studyCourse/study11/study11.component';
import { CompletedCourseComponent } from './components/completed-course/completed-course.component';



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
  { path: 'courses/study', component: Study1Component },
  { path: 'courses/study/02', component: Study2Component },
  { path: 'courses/study/03', component: Study3Component },
  { path: 'courses/study/04', component: Study4Component },
  { path: 'courses/study/05', component: Study5Component },
  { path: 'courses/study/06', component: Study6Component },
  { path: 'courses/study/07', component: Study7Component },
  { path: 'courses/study/08', component: Study8Component },
  { path: 'courses/study/09', component: Study9Component },
  { path: 'courses/study/10', component: Study10Component },
  { path: 'courses/study/11', component: Study11Component },
  { path: 'completed', component: CompletedCourseComponent },

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
    Productivity18Component,
    Study1Component,
    Study2Component,
    Study3Component,
    Study4Component,
    Study5Component,
    Study6Component,
    Study7Component,
    Study8Component,
    Study9Component,
    Study10Component,
    Study11Component,
    CompletedCourseComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
