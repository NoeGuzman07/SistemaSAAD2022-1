import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimalesListComponent } from './components/animales-list/animales-list.component';
import { AnimalesFormComponent } from './components/animales-form/animales-form.component';
import { PersonasFormComponent } from './components/personas-form/personas-form.component';
import { AdoptarFormComponent } from './components/adoptar-form/adoptar-form.component';
import { AnimalesAdoptadosComponent } from './components/animales-adoptados/animales-adoptados.component';
import { AnimalesNoadoptadosComponent } from './components/animales-noadoptados/animales-noadoptados.component';
import { ErrorAdoptarComponent } from './components/error-adoptar/error-adoptar.component';
import { RegistroPersonaExitosoComponent } from './components/registro-persona-exitoso/registro-persona-exitoso.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/animales',
    pathMatch: 'full'
  },
  {
    path: 'animales',
    component: AnimalesListComponent
  },
  {
    path: 'animales/add',
    component: AnimalesFormComponent
  },
  {
    path: 'animales/edit/:id',
    component: AnimalesFormComponent
  },
  {
    path: 'animales/add/user',
    component: PersonasFormComponent
  },
  {
    path: 'animales/adoptar',
    component: AdoptarFormComponent
  },
  {
    path: 'animales/adoptados',
    component: AnimalesAdoptadosComponent
  },
  {
    path: 'animales/noadoptados',
    component: AnimalesNoadoptadosComponent
  },
  {
    path: 'animales/erroradoptar',
    component: ErrorAdoptarComponent
  },
  {
    path: 'animales/registro-exitoso',
    component: RegistroPersonaExitosoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
