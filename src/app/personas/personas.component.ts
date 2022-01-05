import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../interfaces/persona';
import { PersonaService } from '../services/persona.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(
    private personaService: PersonaService,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.obtenerPersonas().subscribe({
      next: (personas) => {
        this.personas != null && (this.personas = []);
        this.personas = personas;
        this.personaService.setPersonas(personas);
      },
    });
  }

  onClick() {
    this.router.navigate(['personas/agregar']);
  }
}
