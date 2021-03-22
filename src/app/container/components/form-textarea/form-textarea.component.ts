import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputModel } from '../../../models/input.interface';
import { InputAttr } from '../../../models/input-attribute.interface';

@Component({
  selector: 'form-textarea',
  styleUrls: ['form-textarea.component.css'],
  template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <label>{{ input.label }}</label>
      <textarea rows="input.rows" cols="input.cols" [formControlName]="input.name">  
        </textarea>
    </div>
  `
})
export class FormTextAreaComponent implements InputModel {
  input: InputAttr;
  group: FormGroup;
}
