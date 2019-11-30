export default class Analizador{
    constructor(expresion){
        this.derecha = null;
        this.izquierda = null;
        this.expresion = expresion;
    }

    constructor(){
        this.inicio = null;
        this.final = null;
        this.anterior = null;
        this.siguiente = null;
    }

    constructor(){
        this.raiz = null;
    }

    agregar(dato){
        if(this.inicio == null){
            this.inicio = dato;
        } else {
            let final = this._agregar(dato, this.inicio);
            this.final = final;
        }
    }

    _agregar(dato, inicio){
        if(inicio.siguiente == null){
            inicio.siguiente = dato;
            dato.anterior = inicio;
        } else {
            this._agregar(dato, inicio.siguiente);
        }
        return dato;
    }

    crearArbol(){
        while(this.inicio.siguiente != null){
            if(this.expresion == "*" || this.expresion == "/"){
                this.raiz = this.inicio.siguiente;
                this.raiz.izquierda = this.raiz.anterior;
                this.raiz.derecha = this.raiz.siguiente;
                this.raiz.siguiente = this.raiz.siguiente.siguiente;
                this.raiz.anterior = this.raiz.anterior.anterior;
                console.log(this.raiz);
                this.inicio.siguiente = this.raiz;
            } else if (this.expresion == "+" || this.expresion == "-"){
                this.inicio.siguiente = this.inicio.siguiente.siguiente;
                this.crearArbol();
            } else {
                this.inicio.siguiente = this.inicio.siguiente.siguiente;
                this.crearArbol();
            }
        }
    }

    buscar(codigo){
        this._buscar(codigo, this.raiz);
    }

    _buscar(codigo, raiz){
        if(codigo == raiz.codigo){
            console.log("Encontrado: " + raiz);
            return raiz;
        } else {
            if(codigo > raiz.codigo){
                this._buscar(codigo, raiz.derecha);
            } else {
                this._buscar(codigo, raiz.izquierda);
            }
        }
    }

    InOrder(){
        if(this.raiz == null){
            return;
        } else {
            return _InOrder(this.raiz);
        }
    }

    _InOrder(raiz){
        if(raiz.izquierda != null){
            this._InOrder(raiz.izquierda);
        } 
        console.log(raiz.codigo);
        if(raiz.derecha != null){
             this._InOrder(raiz.derecha);
        }
    }

    PreOrder(){
        if(this.raiz == null){
            return;
        } else {
            return this._PreOrder(this.raiz);
        }
    }

    _PreOrder(){
        console.log(raiz.codigo);
        if(raiz.izquierda != null){
            this._PreOrder(raiz.izquierda);
        } 
        if(raiz.derecha != null){
            this._PreOrder(raiz.derecha);
       }
    }

    PosOrder(){
        if(this.raiz == null){
            return;
        } else {
            return this._PosOrder(this.raiz);
        }
    }

    _PosOrder(){
        if(raiz.izquierda != null){
            this._PosOrder(raiz.izquierda);
        } 
        if(raiz.derecha != null){
            this._PosOrder(raiz.derecha);
       }
       console.log(raiz.codigo);   
    }
}