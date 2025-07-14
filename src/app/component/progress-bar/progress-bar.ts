import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

/**
 * @title Determinate progress-bar
 */
@Component({
  selector: 'app-progress-bar',
  standalone: true,
  templateUrl: 'progress-bar.html',
  imports: [MatProgressBarModule],
})
export class ProgressBarDeterminateExample {}