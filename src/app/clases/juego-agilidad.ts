import{Juego} from "./juego";

export class JuegoAgilidad extends Juego{

numero1:number;
numero2:number;
resultado:number;
operador:string;
tiempo:any;
calculo:string;
resultadoUsuario:number;

constructor(){
    super("Agilidad aritmetica");
    this.GenerarCalculo();

}

GenerarCalculo()
{
    this.numero1=Math.round(Math.random()*10);
    this.numero2=Math.round(Math.random()*10);
    let numOp =Math.round(Math.random()*4);

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
        break;
    }
    this.IniciarTiempo();

    return this.numero1 +" "+ this.operador + " " +this.numero2 
}

verificar():boolean
{
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
let segundos=10;
let mili=59;

    let control=setInterval(()=>{

        if(segundos==0 && mili ==0)
        {
            clearInterval(control);
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

}
/////////////////////////////hasta aca///////////////////////////////////
