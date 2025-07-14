import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

/**
 * @title Basic divider
 */
@Component({
  selector: 'app-divider',
  standalone: true,
  templateUrl: 'divider-overview-example.html',
  imports: [MatListModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerOverviewExample {}