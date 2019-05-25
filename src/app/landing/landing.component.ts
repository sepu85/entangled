import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public  imagenes_carrusel = [
    "../../assets/imagen0.png",
    "../../assets/imagen1.png",
    "../../assets/imagen2.png"
    ]; 
    public contador = 0;
    public img = "../../assets/imagen0.png";


    irAtras(event) {
      
      if ( this.contador > 0 ){
          this.img = this.imagenes_carrusel[this.contador-1];
          this.contador--;
          } else {
          this.img = this.imagenes_carrusel[this.imagenes_carrusel.length - 1];
          this.contador = this.imagenes_carrusel.length -1;
          }
       return this.img;
      }

      irAdelante() {
        
        if (this.contador < this.imagenes_carrusel.length -1){
                
          this.img = this.imagenes_carrusel[this.contador+1];
          this.contador++;
        } else {
          this.img = this.imagenes_carrusel[0];
          this.contador = 0;
      }
        return this.img;
      }


  constructor() { }

  ngOnInit() {
  }

}
