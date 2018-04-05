import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; /* Importamos NgModule al ser app.MODULE */

import { AppComponent } from './app.component'; /* También hay que importar app.component.ts */
/* Importamos la clase coche y la enumeración de coche.ts */
import { coche } from './coche';
import { EstadoCoche } from './coche';

/* Copiado de los ejemplos del profe quitando los imports que no usamos */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}