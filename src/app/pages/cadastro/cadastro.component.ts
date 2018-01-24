import { Component, OnInit } from '@angular/core'
import { FotoComponent } from '../../component/foto/foto.component'
import { FotoService } from './../../services/FotoService'
import { ActivatedRoute } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  foto: FotoComponent
  fotoservice: FotoService
  formCadastro: FormGroup

  constructor(rota: ActivatedRoute, private fotoService: FotoService, private formBuilder: FormBuilder) {
    this.foto = new FotoComponent()
    this.formCadastro = this.formBuilder.group({
      titulo: ['valor inicial', Validators.required],
      url: ['', Validators.required],
      descricao: []
    })

    rota.params.subscribe((param) => {
      if (param.id) {
        this.fotoService.resgatar(param.id).subscribe(foto => this.foto = foto)
      }
    })
  }

  salvar(evt) {
    evt.preventDefault()
    // if(this.formCadastro.valid) 
    if (this.foto._id) {
      this.fotoService.atualizar(this.foto).subscribe(resp => console.log('atualizado', resp))
    } else {
      this.fotoservice.salvar(this.foto).subscribe((resp) => {
        console.log(resp)
        if (resp.status === 200) {
          this.foto = new FotoComponent()
        }
      })
    }
  }

}
