import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { InputAttr } from './models/input-attribute.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(ContainerComponent) form: ContainerComponent;

  inputs: InputAttr[] = [
    {
      type: 'text',
      label: 'Full name',
      name: 'name',
      placeholder: 'Text here',
    },
    {
      type: 'number',
      label: 'Age',
      name: 'age',
      placeholder: 'Text here',
    },
    {
      type: 'textarea',
      name: 'desc',
      rows: 10,
      cols: 10,
    },
    {
      type: 'select',
      label: 'Action',
      name: 'action',
      options: ['Action 1', 'Action 2', 'Action 3'],
      placeholder: 'Select a option',
    },
    {
      type: 'datetime',
      label: 'Date',
      name: 'date',
    },
  ];
}
