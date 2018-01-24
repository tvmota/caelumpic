import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filtarTitulo'
})

export class FiltrarTitulo implements PipeTransform {
  transform(fotos, valorDigitado) {
    return fotos.filter((img) => {
      if (img.titulo) {
        return img.titulo.toUpperCase().includes(valorDigitado.toUpperCase() );
      }
      return img;
    });
  }
}
