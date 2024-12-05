import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <div>
      <p *ngFor="let adventurer of adventurerList">{{ adventurer }}</p>
    </div>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  
  adventurerList = ['ElfArcher', 'HumanWizard', 'DwarfWarrior'];
  title = 'ng-saga-compta-app';

  ngOnInit(): void {
    console.table(this.adventurerList);
  }
}
