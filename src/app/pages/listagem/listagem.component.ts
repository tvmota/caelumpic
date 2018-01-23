import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  title = 'Caelumpic';
  fotos: Array<Object> = [];

  // injecao depen. constructor(@Inject(Http) http)
  constructor(http: Http) {
    http.get('http://localhost:3000/v1/fotos').subscribe((resp) => {
      this.fotos = resp.json();
    })
    /*
    let pegarFotos = new XMLHttpRequest()
    pegarFotos.open('GET', 'http://localhost:3000/v1/fotos')
    pegarFotos.send()
    pegarFotos.addEventListener('load', () => {
      this.fotos = JSON.parse(pegarFotos.response)
    })
    */
  }

}
