import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-paginators',
  standalone: true,
  templateUrl: 'paginators.html',
  imports: [MatPaginatorModule],
})
export class PaginatorsComponent {}