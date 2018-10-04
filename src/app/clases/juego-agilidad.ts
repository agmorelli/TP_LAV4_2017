import{Juego} from "./juego";

export class JuegoAgilidad extends Juego{

numero1:number;
numero2:number;
resultado:number;
operador:string;
tiempo:any;
calculo:string;
 resultadoUsuario:any;
 control;
 resultadoJuego;

constructor(){
    super("Agilidad aritmetica");
   this.calculo= this.GenerarCalculo();
    

}

GenerarCalculo()
{
    this.numero1=Math.round(Math.random()*10);
    this.numero2=Math.round(Math.random()*10);
    let numOp =Math.round(Math.random()*3);
    console.log(numOp);

    switch(numOp)
    {
        case 0:
        this.operador= "+";
        break;

        case 1:
        this.operador= "-";
        break;

        case 2:
        this.operador= "*";
        break;

        case 3:
        this.operador= "/";
        if(this.numero1 < this.numero2){
            this.GenerarCalculo();
            
        }
        break;
    }
    this.ObtenerResultado();
    this.IniciarTiempo();

    return this.numero1 +" "+ this.operador + " " +this.numero2 
}

verificar():boolean
{
   this.DetenerTiempo();
    if(this.resultado==this.resultadoUsuario && this.tiempo != "00:00")
    {
        this.gano=true;
        return true;
    }
    return false
}

ObtenerResultado(){
    switch(this.operador){

        case "+": this.resultado= this.numero1 + this.numero2
        break;

        case "-": this.resultado= this.numero1 - this.numero2
        break;

        case "*": this.resultado= this.numero1 * this.numero2
        break;

        case "/": this.resultado= Math.round(this.numero1 / this.numero2)
        break;
    }
}

IniciarTiempo(){
let empezado=true;
let segundos=10;
let mili=59;

    this.control=setInterval(()=>{
  
        if(segundos==0 && mili ==0)
        {
            this.resultadoJuego="perdio";
            this.gano=false;
            clearInterval(this.control);
        }

        mili--;
        if(mili==0 && segundos !=0){

            mili=99;
            segundos--;
        }
        if(segundos==0 && mili <0)
        {
            mili=0;
        }

        this.tiempo= segundos + " : " + mili;
    },10);

}
DetenerTiempo()
{
    
   clearInterval(this.control);
}

}
/////////////////////////////hasta aca///////////////////////////////////
