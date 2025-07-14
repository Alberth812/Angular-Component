import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'app-expansion-overview',
  standalone: true,
  templateUrl: 'expansion-overview.html',
  imports: [MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionOverviewExample {
  readonly panelOpenState = signal(false);
}