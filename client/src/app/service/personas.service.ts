import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  savePersona(persona: Persona){
    return this.http.post(`${this.API_URI}/personas`, persona);
  }

  getPersonas(){
    return this.http.get(`${this.API_URI}/personas`);
  }

  getPersona(id: string){
    return this.http.get(`${this.API_URI}/personas/${id}`);
  }

  deletePersona(id: string){
    return this.http.delete(`${this.API_URI}/personas/${id}`);
  }

  updatePersona(id: string|number, updatedPersona: Persona){
    return this.http.put(`${this.API_URI}/personas/${id}`,updatedPersona);
  }
}
