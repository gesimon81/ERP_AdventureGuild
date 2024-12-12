import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  template: `
    <h1>Welcome to {{title}}!</h1>

    
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  
  title = 'ng-saga-compta-app';

  ngOnInit(): void {
    console.log("init app-root");
  }
}
