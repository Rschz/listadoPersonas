import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormPersonaComponent } from './personas/form-persona/form-persona.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login-guard.service';

const routes: Routes = [
  { path: '', component: PersonasComponent, canActivate: [LoginGuard] },
  {
    path: 'personas',
    component: PersonasComponent,
    canActivate: [LoginGuard],
    children: [
      { path: 'agregar', component: FormPersonaComponent },
      { path: ':id', component: FormPersonaComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
