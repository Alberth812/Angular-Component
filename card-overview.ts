import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-overview',
  standalone: true,
  templateUrl: 'card-overview.html',
  styleUrls: ['card-overview.css'],
  imports: [MatCardModule, MatButtonModule]
})
export class CardOverviewComponent {}