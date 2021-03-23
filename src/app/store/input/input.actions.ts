import { Action } from '@ngrx/store';
import { InputAttr } from '../../models/input-attribute.interface';
import {InputModel} from '../../models/input.interface';

export enum EInputActions {
    CREATE_INPUT = '[INPUT] Create',
    CREATE_INPUT_SUCCESS = '[INPUT] Create Success',
    CREATE_INPUT_ERROR = '[INPUT] Create Fail',

    DELETE_INPUT = '[INPUT] Delete',
    DELETE_INPUT_SUCCESS = '[INPUT] Delete Success',
    DELETE_INPUT_ERROR = '[INPUT] Delete Fail',

    UPDATE_INPUT = '[INPUT] Update',
    UPDATE_INPUT_SUCCESS = '[INPUT] Update Success',
    UPDATE_INPUT_ERROR = '[INPUT] Update Fail'
}

export class CreateInput implements Action{
    readonly type = EInputActions.CREATE_INPUT;
    constructor(public payload:InputAttr){}
}

export class DeleteInput implements Action{
    readonly type = EInputActions.DELETE_INPUT;
    constructor(public payload:InputAttr){}
}

export class UpdateInput implements Action{
    readonly type = EInputActions.UPDATE_INPUT;
    constructor(public payload:InputAttr){}
}


export type InputActions = CreateInput | DeleteInput | UpdateInput;