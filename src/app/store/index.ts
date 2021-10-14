import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCounter from './counter-reducer.reducer'


export interface State {
  count: fromCounter.State
}

export const reducers: ActionReducerMap<State> = {
  count: fromCounter.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
