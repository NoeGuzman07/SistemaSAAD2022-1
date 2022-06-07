import { Component, OnInit } from '@angular/core';
import { AnimalesService } from 'src/app/service/animales.service';

@Component({
  selector: 'app-animales-adoptados',
  templateUrl: './animales-adoptados.component.html',
  styleUrls: ['./animales-adoptados.component.css']
})
export class AnimalesAdoptadosComponent implements OnInit {

  animalesAdoptados: any = [];

  constructor(private animalesService: AnimalesService) { }

  ngOnInit(): void {
    this.getAnimalesAdoptados();
  }

  getAnimalesAdoptados() {
    this.animalesService.getAnimalesAdoptados().subscribe(
      res => {
        this.animalesAdoptados = res;
      },
      err => console.error(err)
    )
  }

  deleteAnimal(id: string){
    this.animalesService.deleteAnimal(id).subscribe(
      res => {
        console.log(res);
        this.getAnimalesAdoptados();
      },
      err => console.error(err)
    )
  }


}
