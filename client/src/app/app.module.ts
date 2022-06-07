import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AnimalesFormComponent } from './components/animales-form/animales-form.component';
import { AnimalesListComponent } from './components/animales-list/animales-list.component';

import { AnimalesService } from './service/animales.service';
import { PersonasService } from './service/personas.service';
import { FormsModule } from '@angular/forms';
import { PersonasFormComponent } from './components/personas-form/personas-form.component';
import { AdoptarFormComponent } from './components/adoptar-form/adoptar-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimalesAdoptadosComponent } from './components/animales-adoptados/animales-adoptados.component';
import { AnimalesNoadoptadosComponent } from './components/animales-noadoptados/animales-noadoptados.component';
import { ErrorAdoptarComponent } from './components/error-adoptar/error-adoptar.component';
import { RegistroPersonaExitosoComponent } from './components/registro-persona-exitoso/registro-persona-exitoso.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AnimalesFormComponent,
    AnimalesListComponent,
    PersonasFormComponent,
    AdoptarFormComponent,
    AnimalesAdoptadosComponent,
    AnimalesNoadoptadosComponent,
    ErrorAdoptarComponent,
    RegistroPersonaExitosoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    AnimalesService,
    PersonasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
