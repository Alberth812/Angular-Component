import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form-field',
  standalone: true,
  templateUrl: 'form-field.html',
  styleUrls: ['form-field.css'],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
})
export class FormFieldComponent {}
