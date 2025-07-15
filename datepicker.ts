import { Component } from '@angular/core';
import { MatCalendar }from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

/** @title Basic datepicker */
@Component({
  selector: 'app-datepicker',
  standalone: true,
  templateUrl: 'datepicker.html',
  styleUrls: ['datepicker.scss'],
  imports: [MatCalendar, MatFormFieldModule, MatInputModule, CommonModule],
})
export class DatepickerOverviewExample {
  selectedDate: Date | null = null;
  showCalendar = false;
}