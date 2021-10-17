import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule, USER_PROVIDED_EFFECTS } from '@ngrx/effects';
import { AuthEffects } from '../auth/auth.effects';
import { reducer } from './auth.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([ AuthEffects ]),
  ]
})
export class AuthModule { }
