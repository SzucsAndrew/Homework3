import { Component } from '@angular/core';
import { TimezoneInfo } from './timezone-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homework3';
  selectedTimeZone = 'Europe/Budapest';
  btAddNewVisiable = true;
  maxCount = 5;

  timezoneInfos: TimezoneInfo[] = [
    new TimezoneInfo('Europe/Budapest', true),
    new TimezoneInfo('Europe/London', false),
  ];

  updateTimezone(timezone: string) {
    this.timezoneInfos.forEach(element => {
      if (element.timezone == timezone) {
        element.isCurrent = true;
      }
      else {
        element.isCurrent = false;
      }
    });
    
    this.selectedTimeZone = timezone;
  }

  addNewTimezone() {
    this.timezoneInfos.push(new TimezoneInfo('', false));
    if (this.timezoneInfos.length >= this.maxCount) {
      this.btAddNewVisiable = false;
    }
  }

}
