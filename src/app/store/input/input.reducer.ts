import { createFeatureSelector, createSelector } from "@ngrx/store";
import { createFeatureReducerFactory } from "@ngrx/store/src/utils";
import { InputAttr } from "../../models/input-attribute.interface";
import { EInputActions, InputActions } from "./input.actions";
import { IInputState } from "./input.state";
export interface State {
    inputs: InputAttr[];
    done: boolean,
    action: string,
    error: null
}
const initState: State = {
    inputs: [
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
            label: 'Description',
            name: 'desc',
            rows: 50,
            cols: 50,
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
    ],
    action: null,
    done: false,
    error: null
}

export function inputReducer(state = initState, action: InputActions): State {
    switch (action.type) {
        case EInputActions.CREATE_INPUT:
            return {
                ...state,
                done: true,
                action: EInputActions.CREATE_INPUT,
                inputs: [...state.inputs, action.payload]
            }
        default:
            return state;
    }
}

export const getInputsState = createFeatureSelector<State>('inputs');
export const getAllInputs = createSelector(getInputsState, (state: State) => state.inputs);
export const isCreated = createSelector(getInputsState, (state: State) =>  state.action === EInputActions.CREATE_INPUT && state.done )