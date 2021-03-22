import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicInputDirective } from './components/dynamic-input/dynamic-input.directive';
import { ContainerComponent } from './container.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormNumberComponent } from './components/form-number/form-number.component';
import { FormSelectComponent } from './components/form-select/form-select.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    DynamicInputDirective,
    ContainerComponent,
    FormInputComponent,
    FormSelectComponent,
    FormNumberComponent
  ],
  exports: [
    ContainerComponent
  ],
  entryComponents: [
    FormInputComponent,
    FormSelectComponent,
    FormNumberComponent
  ]
})
export class DynamicFormModule {}
