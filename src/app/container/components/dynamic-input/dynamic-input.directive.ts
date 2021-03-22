import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';
import { FormNumberComponent } from '../form-number/form-number.component';

import { InputModel } from '../../../models/input.interface';
import { InputAttr } from '../../../models/input-attribute.interface';

const components: {[type: string]: Type<InputModel>} = {
  text: FormInputComponent,
  number: FormNumberComponent,
  select: FormSelectComponent
};

@Directive({
  selector: '[dynamicInput]'
})
export class DynamicInputDirective implements InputModel, OnChanges, OnInit {
  @Input()
  input: InputAttr;

  @Input()
  group: FormGroup;

  component: ComponentRef<InputModel>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnChanges() {
    if (this.component) {
      this.component.instance.input = this.input;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    console.log(components[this.input.type],components,this.input.type);
    if (!components[this.input.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.input.type}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<InputModel>(components[this.input.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.input = this.input;
    this.component.instance.group = this.group;
  }
}
