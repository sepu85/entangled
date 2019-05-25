import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'entangled';
  //private router: Router;
  constructor (private router: Router) { }

  iraLink(path) {
    console.log(path);
    this.router.navigate(['/',path]);
  }
}


