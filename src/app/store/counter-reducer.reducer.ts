import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter-action.actions'


export const counterReducerFeatureKey = 'counterReducer';

export type State = number

export const initialState: State = 0


export const reducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

