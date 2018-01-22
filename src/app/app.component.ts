import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Caelumpic';
  fotos = [];

  constructor() {
    let pegarFotos = new XMLHttpRequest()
    pegarFotos.open('GET', 'http://localhost:3000/v1/fotos')
    pegarFotos.send()
    pegarFotos.addEventListener('load', () => {
      this.fotos = JSON.parse(pegarFotos.response)
    })
  }
}
