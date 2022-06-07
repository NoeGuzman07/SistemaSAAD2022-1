import { Component, OnInit } from '@angular/core';
import { AnimalesService } from 'src/app/service/animales.service';

@Component({
  selector: 'app-animales-noadoptados',
  templateUrl: './animales-noadoptados.component.html',
  styleUrls: ['./animales-noadoptados.component.css']
})
export class AnimalesNoadoptadosComponent implements OnInit {

  animalesNoAdoptados: any = [];

  constructor(private animalesService: AnimalesService) { }

  ngOnInit(): void {
    this.getAnimalesNoAdoptados();
  }

  getAnimalesNoAdoptados() {
    this.animalesService.getAnimalesNoAdoptados().subscribe(
      res => {
        this.animalesNoAdoptados = res;
      },
      err => console.error(err)
    )
  }

  deleteAnimal(id: string){
    this.animalesService.deleteAnimal(id).subscribe(
      res => {
        console.log(res);
        this.getAnimalesNoAdoptados();
      },
      err => console.error(err)
    )
  }
}
