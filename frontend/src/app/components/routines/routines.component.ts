import { Component, OnInit } from '@angular/core';
import { HabitsService } from 'src/app/services/habits.service';

import { HabitsTitleModel } from '../../models/habitstitle.model';
import { HabitsModel } from '../../models/habits.model';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.scss']
})
export class RoutinesComponent implements OnInit {
  routineTitles: HabitsTitleModel[] = [];
  routines: HabitsModel[] = [];

  routinesImages: string[] = [
    '../../../assets/images/elonmusk.png',
    '../../../assets/images/billgates.png',
    '../../../assets/images/stevejobs.png',
    '../../../assets/images/userdefault.png',
  ]

  constructor(private habitsService: HabitsService) { }

  ngOnInit(): void {
    this.habitsService.getRoutinesTitle()
      .subscribe(rtitle => {
        this.routineTitles = rtitle;
        console.log(this.routineTitles);
      })

      this.habitsService.getRoutines()
        .subscribe(task => this.routines = task);
  }


}
