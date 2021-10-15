import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './auth.state';
import { authFeatureKey } from './auth.reducer';

export const authSelector = createFeatureSelector<State>(authFeatureKey);
export const authentificatedSelector = createSelector(authSelector, (state: State) => state.authenticated);

