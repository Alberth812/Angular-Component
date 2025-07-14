import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/**
 * @title Basic progress-spinner
 */
@Component({
  selector: 'app-spinner',
  standalone: true,
  templateUrl: 'spinner.html',
  imports: [MatProgressSpinnerModule],
})
export class SpinnerComponent {}