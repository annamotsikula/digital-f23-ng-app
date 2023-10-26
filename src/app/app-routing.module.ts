import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard, authenticationGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    canActivate: [authenticationGuard]
  },
  {
    path: 'sign-in',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m=> m.MainModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
