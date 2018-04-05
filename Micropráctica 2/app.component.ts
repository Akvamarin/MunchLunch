import { Component } from '@angular/core'; /* Importamos Component al ser app.COMPONENT */

/* Importamos la clase coche y la enumeración de coche.ts */
import { coche } from './coche';
import { EstadoCoche } from './coche';

/* Copiado de los ejemplos del profe */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

/* Aquí definimos todas las funciones y variables que luego usaremos en app.component.html */
export class AppComponent {

	public EstadoCoche:any = EstadoCoche; /* Inicializamos EstadoCoche */
	
	/* Inicializamos los 4 diferentes coches que ofrece nuestro concesionario, con los atributos sin tratar */
	public coches:Array<coche> = [new coche('https://s31.postimg.org/royn385i3/coche01.jpg','renault','scenic',new Date(2007,10,1),new Date(2018,4,1),5000,EstadoCoche.BUENO),
								  new coche('https://s31.postimg.org/waurbrly3/coche02.jpg','seat','ibiza',new Date(2003,1,1,),new Date(2018,3,1),1200,EstadoCoche.BUENO),
								  new coche('https://s31.postimg.org/509g3vtbv/coche03.jpg','renault','megane',new Date(2007,1,1),new Date(2018,3,1),3500,EstadoCoche.MALO),
								  new coche('','tesla','model 3',new Date(2007,1,1),new Date(2018,3,1),4000,EstadoCoche.BUENO)];
	
	/* 
		Definimos un nuevo array de coches, que guarda los coches que se muestran en pantalla en cada momento.
		Contiene los mismos valores que coches, ya que usamos este array en el html y de otro modo no se mostraría ningún coche tras abrir la aplicación. 
	*/
	public coches_filtrados:Array<coche> = this.coches;
	
	/* 
		Función para borrar un coche de los disponibles y también de los que se muestran en pantalla. 
		Se activa al pulsar el botón "Vendido". 
	*/
	public delItem(i):void{
		/* 
			El modelo del coche a ser borrado nos sirve como identificador, ya que obtenemos la posición
			del elemento a borrar con respecto a coches_filtrados, no a coches. 
		*/
		var modelo = this.coches_filtrados[i].modelo;
		var j: number; /* Iterador */
		
		/* Si coches_filtrados es igual a 4, ambos array coinciden en los índices */
		if(this.coches_filtrados.length != 4){
			/* Traversamos los coches disponibles */
			for (j = 0; j<this.coches.length; ++j){
				/* Si el modelo del elemento a analizar en coches coincide con el que queremos borrar... */
				if (this.coches[j].modelo == modelo){
					this.coches.splice(j,1); /* Eliminamos ese coche de los disponibles */
				}
			}
			/* Una vez acabado el loop, eliminamos el coche de coches_filtrados con el índice dado*/
			this.coches_filtrados.splice(i,1); 
		}
		else{
			/* Como coinciden los índices, sólo hay que borrar el coche elegido del array coches */
			this.coches.splice(i,1);
		}
	}
	
	/* Función para rebajar el valor del coche en un 10%. Se activa al pulsar el botón "Rebajar". */
	public rebajar(i):void{
		/* 
			Cambiamos el precio del coche dado su índice en la lista de los filtrados, ya que es la que usamos en el html 
			Debido a que el PVP se obtiene a partir del precio, este también cambiará inmediatamente.
		*/
		this.coches_filtrados[i].precio *= 0.9; 
	}
	
	/* 
		Función para obtener los coches resultantes tras la búsqueda. 
		Actualiza el array de coches filtrados y se llama cada vez que el ususario cambie lo que está escrito en el input.
	*/
	public onSearchChange(searchValue):Array<coche>{
		this.coches_filtrados = []; /* Reseteamos el array con cada nueva búsqueda */
		var len = searchValue.length; /* Obtenemos la longitud de la palabra introducida en el input */
		
		/* Si no hay nada escrito, los coches filtrados deben ser todos los disponibles */
		if (len == 0){
			this.coches_filtrados = this.coches;
		}
		
		/* En cualquier otro caso... */
		else{
			
			/* Definimos los iteradores */
			var i: number;
			var j: number;
			
			/* Traversamos todos los coches disponibles (que no hayan sido borrados) */
			for(i = 0; i<this.coches.length; ++i){
				/* Para cada letra del input... */
				for(j = 0; j<len; ++j){
					/* Comprobamos si esa letra no coincide con la marca del coche a evaluar */
					if(searchValue.charAt(j) != this.coches[i].marca.charAt(j)){
						/* En ese caso pasamos al siguiente coche */
						j = len;
					}
					/* Sólo si todas y cada una de las letras han ido coincidiendo con la marca guardamos el coche en el array de coches_filtrados */
					if(j == len - 1){
						this.coches_filtrados.push(this.coches[i]);
					}
				}	
			}
		}	
			/* Devolvemos los coches del resultado de la búsqueda */
			return this.coches_filtrados;
		}
}