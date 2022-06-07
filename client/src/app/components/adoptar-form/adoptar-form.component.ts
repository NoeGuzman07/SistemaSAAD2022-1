import { Component, HostBinding, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { Persona } from 'src/app/models/persona';
import { PersonasService  } from 'src/app/service/personas.service';
import { AnimalesService } from '../../service/animales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adoptar-form',
  templateUrl: './adoptar-form.component.html',
  styleUrls: ['./adoptar-form.component.css']
})
export class AdoptarFormComponent implements OnInit {

  personas: any = [];
  animales: any = [];

  animalac: Animal = {
    id_animal: 0,
    nombre: '',
    especie: '',
    edad: 0,
    estado: '',
    imagen: '',
    persona_id_persona: 0
  }
  exito: boolean = false;

  personaab: Persona = {
    id_persona: 0,
    nombre: '',
    direccion: ''
  }

  animalab: Animal = {
    id_animal: 0,
    nombre: '',
    especie: '',
    edad: 0,
    estado: '',
    imagen: ''
  }

  constructor(private personasService: PersonasService, private animalesService: AnimalesService, private router: Router) { }

  ngOnInit(): void {
    this.getPersonas();
    this.getAnimales();
  }

  getPersonas() {
    this.personasService.getPersonas().subscribe(
      res => {
        console.log(res);
        this.personas = res;
      },
      err => console.error(err)
    )
  }

  getAnimales() {
    this.animalesService.getAnimalesNoAdoptados().subscribe(
      res => {
        console.log(res);
        this.animales = res;
      },
      err => console.error(err)
    )
  }

  adoptar() {
    this.exito = false;
    for(let per of this.personas){
      if(this.personaab.nombre == per.nombre) {
        for(let ani of this.animales){
          if(this.animalab.nombre == ani.nombre){
            this.exito = true;
            ani.persona_id_persona= per.id_persona;
            ani.estado = 'ADOPTADO';
            this.animalac = ani;
            this.animalesService.updateAnimal(ani.id_animal, this.animalac).subscribe(
              res => {
                this.router.navigate(['/animales/adoptados']);
              },
              err => console.error(err)
            )
          }
        }
      }
    }
    if(this.exito == false) {
      this.router.navigate(['/animales/erroradoptar']);
    }
  }
}
