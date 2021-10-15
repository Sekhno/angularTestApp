import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCounter from './counter-reducer.reducer';
import { State as AuthState } from '../auth/auth.state';
import * as fromAuth from '../auth/auth.reducer';

export interface State {
  count: fromCounter.State,
  auth: AuthState
}

export const reducers: ActionReducerMap<State> = {
  count: fromCounter.reducer,
  auth: fromAuth.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
