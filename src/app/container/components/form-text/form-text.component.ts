import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputModel } from '../../../models/input.interface';
import { InputAttr } from '../../../models/input-attribute.interface';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import { DeleteInput, UpdateInput } from 'src/app/store/input/input.actions';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialog } from '../update-dialog/update.dialog';

@Component({
  selector: 'form-text',
  styleUrls: ['form-text.component.css'],
  template: `
    <div
      class="dynamic-field form-input"
      [formGroup]="group"
      (mouseenter)="onShowButton(true)"
      (mouseleave)="onShowButton(false)"
    >
      <div class="dynamic-button">
        <label>{{ input.label }}</label>
        <div *ngIf="isShowed">
          <button
            type="button"
            class="btn btn-info btn-custom"
            (click)="onUpdate()"
          >
            <mat-icon class="mat-icon" aria-hidden="false" aria-label="edit"
              >edit</mat-icon
            >
          </button>
          <button
            type="button"
            class="btn btn-danger btn-custom"
            (click)="onDelete()"
          >
            <mat-icon class="mat-icon" aria-hidden="false" aria-label="delete"
              >delete</mat-icon
            >
          </button>
        </div>
      </div>
      <input
        type="text"
        [attr.placeholder]="input.placeholder"
        [formControlName]="input.name"
      />
    </div>
  `,
})
export class FormTextComponent implements InputModel {
  input: InputAttr;
  group: FormGroup;
  isShowed: false;
  constructor(private store: Store<IAppState>, public dialog: MatDialog) {}

  onUpdate() {
    const dialogRef = this.dialog.open(UpdateDialog, {
      width: '30%',
      data: this.input,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.store.dispatch(new UpdateInput(result));
    });
  }

  onDelete() {
    this.store.dispatch(new DeleteInput(this.input));
  }

  onShowButton(event) {
    this.isShowed = event;
  }
}
