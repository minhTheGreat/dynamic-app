import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputModel } from '../../../models/input.interface';
import { InputAttr } from '../../../models/input-attribute.interface';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import { DeleteInput, UpdateInput } from 'src/app/store/input/input.actions';

@Component({
  selector: 'form-datetime',
  styleUrls: ['form-datetime.component.css'],
  template: `
        <div 
        class="dynamic-field form-input" 
        [formGroup]="group" (mouseenter)="onShowButton(true)" (mouseleave)="onShowButton(false)">
        <div class="dynamic-button">
        <label>{{ input.label }}</label>
        <div *ngIf="isShowed">
            <button type="button" class="btn btn-info btn-custom" (click)="onUpdate()">
            <mat-icon class="mat-icon" aria-hidden="false" aria-label="edit">edit</mat-icon></button>
            <button type="button" class="btn btn-danger btn-custom" (click)="onDelete()">
            <mat-icon class="mat-icon" aria-hidden="false" aria-label="delete">delete</mat-icon></button>
        </div>
      </div>
        <input
            type="datetime-local"
            [attr.placeholder]="input.placeholder"
            [formControlName]="input.name">
        </div>
  `
})
export class FormDatetimeComponent implements InputModel {
  input: InputAttr;
  group: FormGroup;
  isShowed: false;
  constructor(private store: Store<IAppState>){}

  onUpdate(){
    this.store.dispatch(new UpdateInput(this.input));
  }

  onDelete(){
    this.store.dispatch(new DeleteInput(this.input));
  }

  onShowButton(event){
    this.isShowed = event;
  }
}
