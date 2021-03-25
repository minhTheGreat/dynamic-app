import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IAppState } from '../app.state';
import { UpdateDialog } from '../container/components/update-dialog/update.dialog';
import { CreateInput, DeleteInput, UpdateInput } from '../store/input/input.actions';


@Injectable()
export class DynamicFormService {
    constructor(private store: Store<IAppState>, public dialog: MatDialog, private firebase: AngularFirestore) {
        // this.firebase.collection('dynamic-form').add(defaultInput)
    }

    public onCreate(input){
        this.firebase.collection('dynamic-form').add(input)
        .then((docRef)=> {
            input.firebaseId = docRef.id;
          this.store.dispatch(new CreateInput(input));
          console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
          console.error("Error adding document: ", error);
          });
    }

    public onUpdate(input) {
        const dialogRef = this.dialog.open(UpdateDialog, {
            width: '30%',
            data: input,
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.store.dispatch(new UpdateInput(result));
                this.firebase.collection('dynamic-form').doc(input.firebaseId).update(result)
                    .then(function () {
                        console.log("Document successfully updated");
                    })
                    .catch(function (error) {
                        console.error("Error updating document: ", error);
                    })
            }
        });
    }

    public onDelete(input) {
        this.store.dispatch(new DeleteInput(input));
        this.firebase.collection('dynamic-form').doc(input.firebaseId).delete()
            .then(function () {
                console.log("Document successfully deleted");
            })
            .catch(function (error) {
                console.error("Error removing document: ", error);
            })
    }
}