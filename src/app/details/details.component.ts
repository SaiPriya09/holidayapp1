import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private dataService: DataService,private route: ActivatedRoute,) { }

  holidaysList: any[] = [];
  holidays: any;
  holiday: any;
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("id: " + id);
    this.getHoliday(id);
  }

  getHoliday(id: number) {
    var count = 0;
    this.dataService.getHolidayList()
    .subscribe(hero => {
      this.holidays = hero;
      if (this.holidays && this.holidays.hasOwnProperty('holidays')) {
        for (var key in this.holidays.holidays) {
          for (var val in this.holidays.holidays[key]) {
            if(count == id){
              this.holiday = this.holidays.holidays[key][val];
            }
            this.holidaysList.push(this.holidays.holidays[key][val]);
            count++;
          }
        }
      }
    });   
  }
}
