import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-holidaylist',
  templateUrl: './holidaylist.component.html',
  styleUrls: ['./holidaylist.component.css']
})


export class HolidaylistComponent implements OnInit {

  constructor(private dataService: DataService) { }

  holidays: any;
  holidaysList: any[] = [];
  ngOnInit() {
    this.dataService.getHolidayList()
      .subscribe(hero => {
        this.holidays = hero;
        console.log("" + this.holidays);
        if (this.holidays && this.holidays.hasOwnProperty('holidays')) {
          for (var key in this.holidays.holidays) {
            for (var val in this.holidays.holidays[key]) {
              this.holidaysList.push(this.holidays.holidays[key][val]);
            }
          }
        }
      });
  }
}