import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule,
  MatChipsModule, MatDialogModule,
  MatIconModule, MatInputModule, MatNativeDateModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule
  ]
})
export class MatComponentModule { }
