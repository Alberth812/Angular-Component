import { Component, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { CardOverviewComponent } from './component/card-overview/card-overview';
import { MatAutocompleteComponent } from './component/mat-autocomplete/mat-autocomplete';
import { DatepickerOverviewExample} from './component/DatepickerOverviewExample/datepicker';
import { DividerOverviewExample } from './component/divider-overview-example/divider-overview-example';
import { ExpansionOverviewExample } from './component/expansion-overview/expansion-overview';
import { ProgressBarDeterminateExample } from './component/progress-bar/progress-bar';
import { SelectComponent } from './component/select/select';
import { SpinnerComponent } from './component/spinner/spinner';
import { ToolbarComponent } from './component/toolbar/toolbar';
import { MenuComponent } from './component/menu/menu';
import { FormFieldComponent} from './component/form-field/form-field';
import { BasicIconsComponent } from "./component/basic-icons/basic-icons";
import { SortingOverviewComponent } from "./component/sorting-overview/sorting-overview";
import { PaginatorsComponent } from "./component/paginator/paginator";
import { SlideTogglesComponent } from "./component/slide-toggles/slide-toggles";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    SlideTogglesComponent,
    MatAutocompleteModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSortModule,
    MatToolbarModule,
    MatIconModule,

   
    // ...material modules...
    MatAutocompleteComponent,
    DatepickerOverviewExample,
    DividerOverviewExample,
    ExpansionOverviewExample,
    FormFieldComponent,
    ProgressBarDeterminateExample,
    SelectComponent,
    SpinnerComponent,
    ToolbarComponent,
    MenuComponent,
    BasicIconsComponent,
    SortingOverviewComponent,
    PaginatorsComponent,
    CardOverviewComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.scss',
  providers: [provideNativeDateAdapter()],
})
export class App {
  protected readonly title = signal('angular-material');
}