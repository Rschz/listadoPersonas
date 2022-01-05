import { Component, Input } from '@angular/core';
import { Persona } from '../../interfaces/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-persona',
  template: `
    <ul>
      <li *ngIf="persona != null">
        <a [routerLink]="['/personas', i]" class="btn">
          {{ persona.nombre }} {{ persona.apellido }}
        </a>
      </li>
    </ul>
  `,
})
export class PersonaComponent {
  @Input() persona: Persona = { nombre: '', apellido: '' };
  @Input() i: number = 0;

  constructor(private personaService: PersonaService) {}

  emitirSaludo() {
    this.personaService.saludar.emit(this.i);
  }
}
