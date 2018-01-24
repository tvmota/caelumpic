import { FotoService } from './../../services/FotoService';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FotoComponent } from '../../component/foto/foto.component';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  title = 'Caelumpic';
  fotos: Array<FotoComponent> = [];
  fotoService: FotoService;

  // injecao depen. constructor(@Inject(Http) http)
  constructor(fotoService: FotoService) {
    this.fotoService = fotoService;
    this.listarFotos();
    /*
    http.get('http://localhost:3000/v1/fotos').subscribe((resp) => {
      this.fotos = resp.json();
    })
    let pegarFotos = new XMLHttpRequest()
    pegarFotos.open('GET', 'http://localhost:3000/v1/fotos')
    pegarFotos.send()
    pegarFotos.addEventListener('load', () => {
      this.fotos = JSON.parse(pegarFotos.response)
    })
    */
  }

  private listarFotos() {
    this.fotoService.listar().subscribe(resp => this.fotos = resp)
  }

   removerFoto(fotoDel: FotoComponent) {
    this.fotoService.remover(fotoDel).subscribe((resp) => {
      if (resp.status === 200) {
        this.fotos =  this.fotos.filter(foto => foto._id !== fotoDel._id)
      }
    })
  }

}
