import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { IAppState } from '../app.state';


@Injectable()
export class DynamicFormService {
    constructor(private store :Store<IAppState>,private firebase: AngularFirestore){
        // this.firebase.collection('dynamic-form').add(defaultInput)
    }
}