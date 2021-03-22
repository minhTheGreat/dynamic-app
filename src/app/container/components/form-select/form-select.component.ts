import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputModel } from '../../../models/input.interface';
import { InputAttr } from '../../../models/input-attribute.interface';
@Component({
  selector: 'form-select',
  styleUrls: ['form-select.component.css'],
  template: `
    <div class="dynamic-field form-select" [formGroup]="group">
      <label>{{ input.label }}</label>
      <select [formControlName]="input.name">
        <option value="">{{ input.placeholder }}</option>
        <option *ngFor="let option of input.options">
          {{ option }}
        </option>
      </select>
    </div>
  `,
})
export class FormSelectComponent implements InputModel {
  input: InputAttr;
  group: FormGroup;
}
