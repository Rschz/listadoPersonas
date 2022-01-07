import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './interfaces/persona';
import { LoginService } from './login/login.service';

@Injectable()
export class DataService {
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  //Obtener personas
  obtenerPersonas() {
    const token = this.loginService.token;
    return this.httpClient.get<Persona[]>(
      'https://listadopersonas-cefbc-default-rtdb.firebaseio.com/datos.json?auth=' +
        token
    );
  }

  //Guardar personas
  guardarPersonas(personas: Persona[]) {
    const token = this.loginService.token;

    this.httpClient
      .put(
        'https://listadopersonas-cefbc-default-rtdb.firebaseio.com/datos.json?auth=' +
          token,
        personas
      )
      .subscribe({
        next: (v) => console.log('NEXT:' + v),
        error: (e) => console.error('ERROR:' + e),
        complete: () => console.info('complete'),
      });
  }

  //Modificar persona
  modificarPersona(index: number, persona: Persona) {
    const token = this.loginService.token;

    let url: string =
      `https://listadopersonas-cefbc-default-rtdb.firebaseio.com/datos/${index}.json?auth=` +
      token;

    this.httpClient.put(url, persona).subscribe({
      complete: () => console.log('Se completo la edición'),
      error: (e) => console.log('Ha ocurrido el siguiente error: ' + e),
    });
  }

  eliminarPersona(index: number) {
    const token = this.loginService.token;

    let url: string =
      `https://listadopersonas-cefbc-default-rtdb.firebaseio.com/datos/${index}.json?auth=` +
      token;

    this.httpClient.delete(url).subscribe({
      complete: () => console.log('Se elimino'),
      error: (e) => console.log('Ha ocurrido el error: ' + e),
    });
  }
}
