import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public chunks = [];
  public columnsChunks = [];
  private chunksQty = 25;

  constructor() { 

    for (let i = 1 ; i<= this.chunksQty ; i++) {
      this.chunks.push(i)
      
      console.log(this.chunks);
    }

    for (let i = 0 ; i <= (this.chunksQty/5); i++) {
      console.log(i)

    }
  }

  ngOnInit() {

    



    



  }

}
