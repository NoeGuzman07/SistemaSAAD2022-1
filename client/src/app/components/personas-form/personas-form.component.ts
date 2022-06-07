import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Persona } from '../../models/persona';
import { PersonasService } from '../../service/personas.service';

@Component({
  selector: 'app-personas-form',
  templateUrl: './personas-form.component.html',
  styleUrls: ['./personas-form.component.css']
})
export class PersonasFormComponent implements OnInit {

  persona: Persona = {
    id_persona: 0,
    nombre: '',
    direccion: ''
  };

  constructor(private personasService: PersonasService, private router: Router) { }

  ngOnInit(): void {
  }

  saveNewPersona() {
    this.personasService.savePersona(this.persona).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/animales/registro-exitoso']);
      },
      err => console.error(err)
    )
  }
}
