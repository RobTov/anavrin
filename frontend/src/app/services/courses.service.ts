import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseModel } from '../models/course.model';
import { LessonModel } from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseCoursesUrl = 'http://127.0.0.1:8000/api/courses/';
  // proctastinationUrl = 'http://127.0.0.1:8000/api/courses/1/';
  // productivityUrl = 'http://127.0.0.1:8000/api/courses/2/';
  baseLessonsUrl = 'http://127.0.0.1:8000/api/courses/lesson/';

  constructor(private http: HttpClient) { }

  // getProcastinationCourse(): Observable<CourseModel> {
  //   return this.http.get<CourseModel>(this.proctastinationUrl);
  // }

  // getProductivityCourse(): Observable<CourseModel> {
  //   return this.http.get<CourseModel>(this.productivityUrl);
  // }

  getAllCourses(): Observable<CourseModel[]>{
    return this.http.get<CourseModel[]>(this.baseCoursesUrl);
  }

  getAllLessons(): Observable<LessonModel[]> {
    return this.http.get<LessonModel[]>(this.baseLessonsUrl);
  }
}
