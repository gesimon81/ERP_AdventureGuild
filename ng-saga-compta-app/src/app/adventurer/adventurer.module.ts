import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListAdventurersComponent } from './list-adventurers/list-adventurers.component';
import { BorderCardDirective } from './border-card.directive';

const adventurerRoutes: Routes = [
  { path: 'adventurers', component: ListAdventurersComponent },
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adventurerRoutes)
  ]
})
export class AdventurerModule { }
