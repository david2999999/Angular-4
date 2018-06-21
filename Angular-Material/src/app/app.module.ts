import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatChipsModule, MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule, MatProgressSpinnerModule,
  MatSelectModule, MatTabsModule, MatTooltipModule
} from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { SelectComponent } from './select/select.component';
import {FormsModule} from '@angular/forms';
import { InputsComponent } from './inputs/inputs.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {DatePickerComponent} from './date-picker/date-picker.component';
import { IconsComponent } from './icons/icons.component';
import {ButtonComponent} from './button/button.component';
import { ChipsComponent } from './chips/chips.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ToolTipComponent } from './tool-tip/tool-tip.component';
import { TabsComponent } from './tabs/tabs.component';
import { DialogComponent } from './dialog/dialog.component';
import {DIALOG_DATA, EditCourseComponent} from './dialog/edit-course/edit-course.component';

@NgModule({
  declarations: [
    AppComponent,
    RadioButtonComponent,
    CheckBoxComponent,
    SelectComponent,
    InputsComponent,
    TextAreaComponent,
    DatePickerComponent,
    IconsComponent,
    ButtonComponent,
    ChipsComponent,
    ProgressSpinnerComponent,
    ToolTipComponent,
    TabsComponent,
    DialogComponent,
    EditCourseComponent
  ],
  entryComponents: [
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
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
  ],
  providers: [
    { provide: DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
