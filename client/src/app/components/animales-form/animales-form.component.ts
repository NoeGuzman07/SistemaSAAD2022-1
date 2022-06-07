import { Component, HostBinding, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { Router, ActivatedRoute} from '@angular/router';

import { AnimalesService } from '../../service/animales.service';

@Component({
  selector: 'app-animales-form',
  templateUrl: './animales-form.component.html',
  styleUrls: ['./animales-form.component.css']
})
export class AnimalesFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  edit: boolean = false;

  animal: Animal = {
    id_animal: 0,
    nombre: '',
    especie: '',
    edad: 0,
    estado: '',
    imagen: ''
  };

  constructor(private animalesService: AnimalesService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params['id']){
      this.animalesService.getAnimal(params['id']).subscribe(
        res => {
          console.log(res);
          this.animal = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  saveNewAnimal() {
    delete this.animal.id_animal;
    delete this.animal.estado;

    this.animalesService.saveAnimal(this.animal).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/animales']);
      },
      err => console.error(err)
    )
  }

  updateAnimal(){
    const params = this.activedRoute.snapshot.params;
    this.animalesService.updateAnimal(params['id'], this.animal).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/animales']);
      },
      err => console.error(err)
    );
  }

}
