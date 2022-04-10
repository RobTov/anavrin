import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HabitsTitleModel } from '../models/habitstitle.model';
import { HabitsModel } from '../models/habits.model';

@Injectable({
  providedIn: 'root'
})
export class HabitsService {
  baseRoutinesTitleUrl = 'http://127.0.0.1:8000/api/habits/custom/';
  baseRoutinesUrl = 'http://127.0.0.1:8000/api/habits/custom/task/';

  constructor(private http: HttpClient) { }

  getRoutinesTitle(): Observable<HabitsTitleModel[]> {
    return this.http.get<HabitsTitleModel[]>(this.baseRoutinesTitleUrl);
  }

  getRoutines(): Observable<HabitsModel[]> {
    return this.http.get<HabitsModel[]>(this.baseRoutinesUrl);
  }
  
}
