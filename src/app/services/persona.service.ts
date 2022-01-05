import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona';
import { LoggingService } from '../LoggingService.service';
import { DataService } from '../data.service';

@Injectable()
export class PersonaService {
  personas: Persona[] = [];

  saludar: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private loggingService: LoggingService,
    private dataService: DataService
  ) {}

  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }

  agregarPersona(persona: Persona) {
    this.personas == null && (this.personas = []);

    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas);

    this.loggingService.muestraMensajePorConsola(
      'Persona creada' + persona.nombre + ' ' + persona.apellido
    );
  }

  modificarPersona(indice: number, persona: Persona) {
    this.personas[indice] = persona;
    this.dataService.modificarPersona(indice, persona);
  }

  eliminarPersona(indice: number) {
    this.personas.splice(indice, 1);
    this.dataService.eliminarPersona(indice);

    //Actualizo todas las personas
    this.personas != null && this.dataService.guardarPersonas(this.personas);
  }

  encontrarPersona(indice: number) {
    return this.personas[indice];
  }
}
