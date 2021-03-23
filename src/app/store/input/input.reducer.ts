import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createFeatureReducerFactory } from '@ngrx/store/src/utils';
import { InputAttr } from '../../models/input-attribute.interface';
import { EInputActions, InputActions } from './input.actions';
import { IInputState } from './input.state';
export interface State {
  inputs: InputAttr[];
  done: boolean;
  action: string;
  error: null;
}
const initState: State = {
  inputs: [
    {
      id: 1,
      type: 'text',
      label: 'Full name',
      name: 'name',
      placeholder: 'Text here',
    },
    {
      id: 2,
      type: 'number',
      label: 'Age',
      name: 'age',
      placeholder: 'Text here',
    },
    {
      id: 3,
      type: 'textarea',
      label: 'Description',
      name: 'desc',
      rows: 50,
      cols: 50,
    },
    {
      id: 4,
      type: 'select',
      label: 'Action',
      name: 'action',
      options: ['Action 1', 'Action 2', 'Action 3'],
      placeholder: 'Select a option',
    },
    {
      id: 5,
      type: 'datetime',
      label: 'Date',
      name: 'date',
    },
  ],
  action: null,
  done: false,
  error: null,
};

export function inputReducer(state = initState, action: InputActions): State {
  switch (action.type) {
    case EInputActions.CREATE_INPUT:
      return {
        ...state,
        done: true,
        action: EInputActions.CREATE_INPUT,
        inputs: [...state.inputs, action.payload],
      };
    case EInputActions.DELETE_INPUT:
      return {
        ...state,
        done: true,
        action: EInputActions.DELETE_INPUT,
        inputs: state.inputs.filter((input) => input.id != action.payload.id),
      };
    case EInputActions.UPDATE_INPUT:
      const index = state.inputs.findIndex(
        (input) => input.id === action.payload.id
      );
      if (index > 0) {
        const data = [
          ...state.inputs.slice(0, index),
          action.payload,
          ...state.inputs.slice(index + 1),
        ];
        return {
          ...state,
          done: true,
          action: EInputActions.UPDATE_INPUT,
          inputs: data,
        };
      }
      return state;
    default:
      return state;
  }
}

export const getInputsState = createFeatureSelector<State>('inputs');
export const getAllInputs = createSelector(
  getInputsState,
  (state: State) => state.inputs
);
export const isCreated = createSelector(
  getInputsState,
  (state: State) => state.action === EInputActions.CREATE_INPUT && state.done
);
export const isDeleted = createSelector(
  getInputsState,
  (state: State) => state.action === EInputActions.DELETE_INPUT && state.done
);

export const isUpdate = createSelector(getInputsState,(state:State)=> state.action === EInputActions.UPDATE_INPUT && state.done)
