import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectorioComponent } from './gobierno/directorio/directorio.component';
import { MunicipioComponent } from './gobierno/municipio/municipio.component';
import { NumerosEmergenciaComponent } from './gobierno/numeros-emergencia/numeros-emergencia.component';
import { EconomiaComponent } from './economia/economia.component';
import { LugaresParaVisitarComponent } from './turismo/lugares-para-visitar/lugares-para-visitar.component';
import { PreguntasFrecuentesComponent } from './turismo/preguntas-frecuentes/preguntas-frecuentes.component';
import { QueHacerComponent } from './turismo/que-hacer/que-hacer.component';
import { ArticuloOchoComponent } from './transparencia/articulo-ocho/articulo-ocho.component';
import { ArticuloQuinceComponent } from './transparencia/articulo-quince/articulo-quince.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AvisoDePrivacidadComponent } from './aviso-de-privacidad/aviso-de-privacidad.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'directorio',
        component: DirectorioComponent
      },
      {
        path: 'municipio',
        component: MunicipioComponent
      },
      {
        path: 'numeros-emergencia',
        component: NumerosEmergenciaComponent
      },
      {
        path: 'informacion-economica',
        component: EconomiaComponent
      },
      {
        path: 'lugares-para-visitar',
        component: LugaresParaVisitarComponent
      },
      {
        path: 'preguntas-frecuentes',
        component: PreguntasFrecuentesComponent
      },
      {
        path: 'que-hacer',
        component: QueHacerComponent
      },
      {
        path: 'articulo-ocho',
        component: ArticuloOchoComponent
      },
      {
        path: 'articulo-quince',
        component: ArticuloQuinceComponent
      },
      {
        path: 'denuncias-en-linea',
        component: ContactoComponent
      },
      {
        path: 'aviso-de-privacidad',
        component: AvisoDePrivacidadComponent
      },
      {
        path: '**',
        redirectTo: 'inicio'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
