import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: 'toolbar.html',
  styleUrl: 'toolbar.css',
  imports: [MatToolbarModule, MatIconModule],
})
export class ToolbarComponent {}