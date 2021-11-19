import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  ver: boolean; //controla la muestra de resultados
  mensaje: string; //mensaje del juego
  numero: number; //caja que seleccionamos 1,2,3
  ball: number; //lugar donde se enconde la bola 1,2,3

  constructor() {}

  ngOnInit(){
    this.ver = false;
    this.mensaje = '¿En que cajita crees que está la bola?';
    this.numero = 0;
  }

  verCaja(numeroCaja: number){
    this.numero = numeroCaja;
    this.esconderPelota();
    this.ver = true;
  }

  //creamos una funcion que aleatoriamente ponga la pelota en un cubo
  esconderPelota(){
    //la pelota puede tener 3 posiciones distintas 1,2,3
    this.ball = Math.floor(Math.random() * 3) + 1;
    if(this.numero === this.ball){
      this.mensaje = 'Enhorabuena! has ganado';
    }else{
      this.mensaje = 'Lo siento, has perdido';
    }
  }
  reiniciar(){
    this.ver = false;
    this.mensaje = '¿En que cajita crees que está la bola?';
  }
}
