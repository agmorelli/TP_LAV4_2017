import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  @Output()lanzador:EventEmitter<any>;

  miJuego:JuegoAnagrama;
  jugador:string;
  ingresoUsuario:string;
  empezo=false;
  mensaje:string;
  resultado:string;

  constructor() {
    this.jugador="amorelli";
    this.miJuego=new JuegoAnagrama(this.jugador);
    this.miJuego.gano=false;
   
   }

   IniciarJuego(){
     this.miJuego=new JuegoAnagrama(this.jugador);
     this.empezo=true;
     this.ingresoUsuario="";
     this.miJuego.gano=false;
     this.mensaje="";
   }

   Verificar(){
     console.log(this.ingresoUsuario);
     this.miJuego.palabraUsuario= this.ingresoUsuario;
     this.miJuego.verificar();
     let resultado;
     if(this.miJuego.gano){
       
      this.mensaje="Felicitaciones, la palabra era " + this.miJuego.palabraUsada;
      this.resultado="Gano";
     }
     else{
       this.resultado="perdio";
       this.mensaje="mmmm... me parece que " + this.ingresoUsuario + " no es la palabra";
       this.empezo=false;
     }
     let paquete={
       "Juego": this.miJuego.nombre,
       "Jugador": this.jugador,
       "resultado":this.resultado
     }
     this.lanzador.emit(paquete);
     console.log(this.miJuego.gano, this.ingresoUsuario);
   }

  ngOnInit() {
  }

}
