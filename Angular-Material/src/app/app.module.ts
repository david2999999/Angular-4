import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatIconModule, MatInputModule, MatNativeDateModule, MatSelectModule} from '@angular/material';
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

@NgModule({
  declarations: [
    AppComponent,
    RadioButtonComponent,
    CheckBoxComponent,
    SelectComponent,
    InputsComponent,
    TextAreaComponent,
    DatePickerComponent,
    IconsComponent
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
