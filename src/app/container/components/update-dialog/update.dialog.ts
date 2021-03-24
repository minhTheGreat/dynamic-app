import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'update-dialog',
  templateUrl: 'update.dialog.html',
})
export class UpdateDialog {
  updateForm: FormGroup;
  types :string[] = ['text','number','textarea','select','datetime']
  constructor(
    public dialogRef: MatDialogRef<UpdateDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    this.updateForm = new FormGroup({
      id : new FormControl(this.data.id),
      type: new FormControl(this.data.type, Validators.required),
      label: new FormControl(this.data.label, Validators.required),
      name: new FormControl(this.data.name,Validators.required)
    });
  }

  onSubmit() {
    this.dialogRef.close(this.updateForm.value)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
