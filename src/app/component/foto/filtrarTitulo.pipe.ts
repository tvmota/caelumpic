import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filtarTitulo'
})
export class FiltrarTitulo implements PipeTransform {
  transform(fotos, valorDigitado) {
    return fotos.filter( foto => foto.titulo.toUpperCase().includes(valorDigitado.toUpperCase()) )
  }
}