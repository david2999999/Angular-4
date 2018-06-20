import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatInputModule, MatSelectModule} from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { SelectComponent } from './select/select.component';
import {FormsModule} from '@angular/forms';
import { InputsComponent } from './inputs/inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    RadioButtonComponent,
    CheckBoxComponent,
    SelectComponent,
    InputsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
