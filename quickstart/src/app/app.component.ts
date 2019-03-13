import { Component } from '@angular/core';
import { getMaxListeners } from 'cluster';

@Component({
  selector: 'my-app',
  template:`
  <ul>
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="/about">About</a></li>
  </ul>
  <router-outlet></router-outlet> ` ,
})
export class AppComponent  { 

}
