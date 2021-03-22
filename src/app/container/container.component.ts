import { Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {InputAttr} from '../models/input-attribute.interface';
@Component({
  exportAs: 'appContainer',
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  @Input()
  inputs: InputAttr[];

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  get controls() { return this.inputs.filter(({type}) => type !== 'button'); }
  get changes() { return this.form.valueChanges; }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.createGroup();
  }

  ngOnChanges() {
    console.log(this.inputs);

    if (this.form) {
      const controls = Object.keys(this.form.controls);
      const inputControls = this.controls.map((item) => item.name);

      controls
        .filter((control) => !inputControls.includes(control))
        .forEach((control) => this.form.removeControl(control));

      inputControls
        .filter((control) => !controls.includes(control))
        .forEach((name) => {
          const input = this.inputs.find((control) => control.name === name);
          this.form.addControl(name, this.createControl(input));
        });

    }
  }

  createGroup() {
    const group = this.fb.group({});
    this.controls.forEach(control => group.addControl(control.name, this.createControl(control)));
    return group;
  }

  createControl(input: InputAttr) {
    const { disabled, value } = input;
    return this.fb.control({ disabled, value });
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.value);
  }

  setDisabled(name: string, disable: boolean) {
    if (this.form.controls[name]) {
      const method = disable ? 'disable': 'enable';
      this.form.controls[name][method]();
      return;
    }

    this.inputs = this.inputs.map((item) => {
      if (item.name === name) {
        item.disabled = disable;
      }
      return item;
    });
  }

  setValue(name: string, value: any) {
    this.form.controls[name].setValue(value, {emitEvent: true});
  }
}
