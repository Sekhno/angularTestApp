import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component'
import { MainComponent } from './pages/main/main.component';
import { AuthGuard } from './auth/auth.guard'

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'sign-in', component: SignInComponent },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
