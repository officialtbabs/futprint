import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

const routes: Routes = [
  {path: "", pathMatch: "full",  redirectTo: "/login"},
  {path: 'login', component: LoginFormComponent},
  {path: 'signup', component: SignupFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginFormComponent, SignupFormComponent]