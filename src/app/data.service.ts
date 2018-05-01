import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  holidays: object;
  getHolidayList():Observable<any>{
    return this.http.get<any>('https://holidayapi.com/v1/holidays?key=25e15ff5-210f-436b-b3e0-c91de97d4cf5&country=US&year=2015');
  }
}

