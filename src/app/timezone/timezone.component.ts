import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { TimezoneInfo } from '../timezone-info';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit, OnChanges {
  @Input() timezoneInfo! : TimezoneInfo;
  @Output() changeTimezone = new EventEmitter<string>();

  time = '';

  constructor() { }

  ngOnInit(): void {
    this.updateTime();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.timezone) {
      this.updateTime();
    }
  }

  updateTime() {
    if (this.timezoneInfo.timezone) {
      this.time = new Date().toLocaleString("hu-HU", {timeZone: this.timezoneInfo.timezone});
    }
  }

  changeTimeZoneClicked() {
    this.changeTimezone.emit(this.timezoneInfo.timezone);
  }

}
