import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { FotoModule } from './component/foto/foto.module'
import { CardModule } from './component/card/card.module'
import { CadastroComponent } from './pages/cadastro/cadastro.component'
import { ListagemComponent } from './pages/listagem/listagem.component'
import { roteamento } from './app.routes'
import { ErrorComponent } from './pages/error/error.component'
import { FotoService } from './services/FotoService'
import 'rxjs/add/operator/map'

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FotoModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    roteamento
  ],
  providers: [ FotoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
