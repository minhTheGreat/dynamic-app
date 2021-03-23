import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DynamicInputDirective } from './components/dynamic-input/dynamic-input.directive';
import { ContainerComponent } from './container.component';
import { FormTextComponent } from './components/form-text/form-text.component';
import { FormNumberComponent } from './components/form-number/form-number.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormTextAreaComponent } from './components/form-textarea/form-textarea.component';
import { FormDatetimeComponent } from './components/form-datetime/form-datetime.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {UpdateDialog} from './components/update-dialog/update.dialog';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    NoopAnimationsModule
  ],
  declarations: [
    UpdateDialog,
    DynamicInputDirective,
    ContainerComponent,
    FormTextComponent,
    FormSelectComponent,
    FormNumberComponent,
    FormTextAreaComponent,
    FormDatetimeComponent
  ],
  exports: [
    ContainerComponent
  ],
  entryComponents: [
    UpdateDialog,
    FormTextComponent,
    FormSelectComponent,
    FormNumberComponent,
    FormTextAreaComponent,
    FormDatetimeComponent,
    UpdateDialog
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class DynamicFormModule {}
