import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltrarTitulo } from './filtrarTitulo.pipe';

@NgModule({
  declarations: [ FotoComponent, FiltrarTitulo ],
  exports: [ FotoComponent, FiltrarTitulo ]
})

export class FotoModule {}