import { Http, Headers, Response } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { FotoComponent } from '../component/foto/foto.component'

@Injectable()
export class FotoService {
  private baseUrl: String = 'http://localhost:3000'
  private http: Http
  private cabecalho: Headers
  private objHead: Object

  constructor(http: Http) {
    this.http = http
    this.cabecalho = new Headers()
    this.cabecalho.append('Content-type', 'application/json')
    this.objHead = { headers: this.cabecalho }
  }

  listar (): Observable<Array<FotoComponent>> {
    return this.http.get(`${this.baseUrl}/v1/fotos`).map(dados => dados.json())
  }

  salvar (foto: FotoComponent): Observable<Response> {
    return this.http.post(`${this.baseUrl}/v1/fotos`, JSON.stringify(foto), this.objHead)
  }

  remover (foto: FotoComponent): Observable<Response> {
    return this.http.delete(`${this.baseUrl}/v1/fotos/${foto._id}`)
  }

  resgatar (id): Observable<FotoComponent> {
    return this.http.get(`${this.baseUrl}/v1/fotos/${id}`).map(dados => dados.json())
  }

  atualizar (foto: FotoComponent): Observable<Response> {
    return this.http.put(
      `${this.baseUrl}/v1/fotos/${foto._id}`,
      JSON.stringify(foto),
      this.objHead)
  }
}