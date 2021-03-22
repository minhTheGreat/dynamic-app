import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicInputDirective } from './components/dynamic-input/dynamic-input.directive';
import { ContainerComponent } from './container.component';
import { FormTextComponent } from './components/form-text/form-text.component';
import { FormNumberComponent } from './components/form-number/form-number.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormTextAreaComponent } from './components/form-textarea/form-textarea.component';
import { FormDatetimeComponent } from './components/form-datetime/form-datetime.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
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
    FormTextComponent,
    FormSelectComponent,
    FormNumberComponent,
    FormTextAreaComponent,
    FormDatetimeComponent
  ]
})
export class DynamicFormModule {}
