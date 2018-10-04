import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  Mensajes: string;
  display : boolean = false;
  resultadoJuego:string;
  empezo:boolean;
 
  
  @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();

  
  nuevoJuego : JuegoAgilidad;
constructor(){

}

ngOnInit(){}

NuevoJuego(){
  this.nuevoJuego=new JuegoAgilidad();
  console.log(this.nuevoJuego);
  this.nuevoJuego.resultadoUsuario="";
  this.nuevoJuego.resultadoJuego="";
  this.empezo=true;
}

IngresarNumero(num)
{
  console.log(num);
 this.nuevoJuego.resultadoUsuario=this.nuevoJuego.resultadoUsuario + num; 
}

Verificar(){
  if(this.nuevoJuego.verificar())
  {
    this.nuevoJuego.resultadoJuego="gano";
    this.Mensajes="Ganaste!!"
  }
  else{
    this.nuevoJuego.resultadoJuego="perdio";
    this.Mensajes="Perdiste!!"
  }
  this.empezo=false;
}

}
