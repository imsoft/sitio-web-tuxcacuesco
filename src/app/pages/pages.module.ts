import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AvisoDePrivacidadComponent } from './aviso-de-privacidad/aviso-de-privacidad.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EconomiaComponent } from './economia/economia.component';
import { DirectorioComponent } from './gobierno/directorio/directorio.component';
import { MunicipioComponent } from './gobierno/municipio/municipio.component';
import { NumerosEmergenciaComponent } from './gobierno/numeros-emergencia/numeros-emergencia.component';
import { InicioComponent } from './inicio/inicio.component';
import { ArticuloOchoComponent } from './transparencia/articulo-ocho/articulo-ocho.component';
import { ArticuloQuinceComponent } from './transparencia/articulo-quince/articulo-quince.component';
import { LugaresParaVisitarComponent } from './turismo/lugares-para-visitar/lugares-para-visitar.component';
import { PreguntasFrecuentesComponent } from './turismo/preguntas-frecuentes/preguntas-frecuentes.component';
import { QueHacerComponent } from './turismo/que-hacer/que-hacer.component';


@NgModule({
  declarations: [
    AvisoDePrivacidadComponent,
    ContactoComponent,
    EconomiaComponent,
    DirectorioComponent,
    MunicipioComponent,
    NumerosEmergenciaComponent,
    InicioComponent,
    ArticuloOchoComponent,
    ArticuloQuinceComponent,
    LugaresParaVisitarComponent,
    PreguntasFrecuentesComponent,
    QueHacerComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
