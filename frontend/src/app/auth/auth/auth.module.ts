import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../auth/components/login/login.component';
import { RegisterComponent } from '../../auth/components/register/register.component';
import { FormsModule }   from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
