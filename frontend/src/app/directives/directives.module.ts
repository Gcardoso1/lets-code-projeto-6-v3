import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaTextoDirective } from './marca-texto.directive';



@NgModule({
  declarations: [MarcaTextoDirective],
  exports: [MarcaTextoDirective],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
