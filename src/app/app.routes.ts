import { Routes, RouterModule } from '@angular/router'
import { ListagemComponent } from './pages/listagem/listagem.component'
import { CadastroComponent } from './pages/cadastro/cadastro.component'

const routesApp: Routes = [
  { path: '', component: ListagemComponent },
  { path: 'cadastro', component: CadastroComponent }
]

export const roteamento = RouterModule.forRoot(routesApp)
