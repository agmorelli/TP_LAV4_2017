import { Juego } from '../clases/juego';

import { CasillaTateti } from '../clases/casilla-tateti';

export class Tateti extends Juego {

public tablero: CasillaTateti[][];  

    public verificar():boolean{

     return  this.gano ? true : false;

    }

}
