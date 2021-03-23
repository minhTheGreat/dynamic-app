import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from './app.state';
import { ContainerComponent } from './container/container.component';
import { InputAttr } from './models/input-attribute.interface';
import { getAllInputs, getInputsState } from './store/input/input.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(ContainerComponent) form: ContainerComponent;

  inputs: InputAttr[] =[];
  constructor(private store :Store<IAppState>){
    this.store.select(getAllInputs).subscribe(inputs=>{
      this.inputs = inputs;
    });
  }
}
