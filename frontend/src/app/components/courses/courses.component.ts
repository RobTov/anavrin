import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { CourseModel } from '../../models/course.model';
import { LessonModel } from '../../models/lesson.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // procastinationCourse: CourseModel;
  // productivityCourse: CourseModel;
  courses: CourseModel[];
  allLessons: LessonModel[];
  coursesImages: string[] = [
    '../../../assets/images/courses2.jpg',
    '../../../assets/images/courses1.jpg',
    '../../../assets/images/courses3.jpg',
    '../../../assets/images/courses4.jpg',
  ]

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.getAllCourses().subscribe(courses => this.courses = courses);
    this.coursesService.getAllLessons().subscribe(lessons => this.allLessons = lessons);
    
  }

}
