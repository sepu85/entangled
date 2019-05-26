import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public chunks = [];
  public matrixChunks = [];
  private chunksQty = 25;
  private cont = 0;
  public columnas;

  constructor() { 

    for ( var i = 0 ; i<5 ; i++ ) {
      this.matrixChunks[i] = [];
      for ( let j = 0 ; j<5 ; j++) {
        this.cont++;
        this.matrixChunks[i][j] = this.cont ;
      }
      this.columnas = this.matrixChunks[i];
      console.log(this.columnas)
    }
    console.log(this.matrixChunks)

  }

  ngOnInit() {

    



    



  }

}
