import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: 'input.html',
  styleUrl: 'input.css',
  imports: [MatInputModule, MatFormFieldModule, FormsModule],
})
export class InputComponent {}