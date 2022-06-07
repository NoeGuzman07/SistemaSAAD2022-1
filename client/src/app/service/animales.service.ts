import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getAnimales(){
    return this.http.get(`${this.API_URI}/animales`);
  }

  getAnimalesAdoptados(){
    return this.http.get(`${this.API_URI}/animales/adoptados`);
  }

  getAnimalesNoAdoptados(){
    return this.http.get(`${this.API_URI}/animales/noadoptados`);
  }

  getAnimal(id: string){
    return this.http.get(`${this.API_URI}/animales/${id}`);
  }

  saveAnimal(animal: Animal){
    return this.http.post(`${this.API_URI}/animales`, animal);
  }

  deleteAnimal(id: string){
    return this.http.delete(`${this.API_URI}/animales/${id}`);
  }

  updateAnimal(id: string|number, updatedAnimal: Animal){
    return this.http.put(`${this.API_URI}/animales/${id}`,updatedAnimal);
  }
}
