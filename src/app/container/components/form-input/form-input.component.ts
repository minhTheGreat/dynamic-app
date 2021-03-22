import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputModel } from '../../../models/input.interface';
import { InputAttr } from '../../../models/input-attribute.interface';

@Component({
  selector: 'form-text',
  styleUrls: ['form-input.component.css'],
  template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <label>{{ input.label }}</label>
      <input
        type="text"
        [attr.placeholder]="input.placeholder"
        [formControlName]="input.name">
    </div>
  `
})
export class FormInputComponent implements InputModel {
  input: InputAttr;
  group: FormGroup;
}
