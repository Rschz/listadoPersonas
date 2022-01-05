import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../../interfaces/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css'],
})
export class FormPersonaComponent implements OnInit {
  nombreInput: string = '';
  apellidoInput: string = '';
  indice: number = 0;

  constructor(
    private personaService: PersonaService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.indice = this.aRoute.snapshot.params['id'];
    let persona: Persona = this.personaService.encontrarPersona(this.indice);
    if (persona) {
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona(): void {
    const persona: Persona = Object.assign({
      nombre: this.nombreInput,
      apellido: this.apellidoInput,
    });

    if (this.indice) {
      this.personaService.modificarPersona(this.indice, persona);
    } else {
      this.personaService.agregarPersona(persona);
    }
    this.router.navigate(['personas']);
  }

  onEliminarPersona() {
    if (this.indice != null) {
      this.personaService.eliminarPersona(this.indice);
      this.router.navigate(['personas']);
    }
  }
}
