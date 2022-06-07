import { Component, HostBinding, OnInit } from '@angular/core';
import { AnimalesService } from '../../service/animales.service';

@Component({
  selector: 'app-animales-list',
  templateUrl: './animales-list.component.html',
  styleUrls: ['./animales-list.component.css']
})
export class AnimalesListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  animales: any = [];

  constructor(private animalesService: AnimalesService) { }

  ngOnInit(): void {
    this.getAnimales();
  }

  getAnimales(){
    this.animalesService.getAnimales().subscribe(
      res => {
        this.animales = res;
      },
      err => console.error(err)
    )
  }

  deleteAnimal(id: string){
    this.animalesService.deleteAnimal(id).subscribe(
      res => {
        console.log(res);
        this.getAnimales();
      },
      err => console.error(err)
    )
  }
}
