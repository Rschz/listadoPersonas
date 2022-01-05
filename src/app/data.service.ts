import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './interfaces/persona';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  //Obtener personas
  obtenerPersonas() {
    return this.httpClient.get<Persona[]>(
      'https://listadopersonas-cefbc-default-rtdb.firebaseio.com/datos.json'
    );
  }

  //Guardar personas
  guardarPersonas(personas: Persona[]) {
    this.httpClient
      .put(
        'https://listadopersonas-cefbc-default-rtdb.firebaseio.com/datos.json',
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
    let url: string = `https://listadopersonas-cefbc-default-rtdb.firebaseio.com/datos/${index}.json`;

    this.httpClient.put(url, persona).subscribe({
      complete: () => console.log('Se completo la edición'),
      error: (e) => console.log('Ha ocurrido el siguiente error: ' + e),
    });
  }

  eliminarPersona(index: number) {
    let url: string = `https://listadopersonas-cefbc-default-rtdb.firebaseio.com/datos/${index}.json`;

    this.httpClient.delete(url).subscribe({
      complete: () => console.log('Se elimino'),
      error: (e) => console.log('Ha ocurrido el error: ' + e),
    });
  }
}
