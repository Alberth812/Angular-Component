import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: 'menu.html',
  imports: [MatMenuModule, MatButtonModule, CommonModule],
})
export class MenuComponent {
  selected: string | null = null;

  selectOption(option: string) {
    this.selected = option;
  }
}