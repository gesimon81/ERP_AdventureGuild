import { Component, OnInit } from '@angular/core';
import { Adventurer } from '../adventurer';
import { ADVENTURERS } from '../mock-adventurer-list';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-adventurers',
  imports: [NgFor],
  templateUrl: './list-adventurers.component.html',
  styles: ``
})
export class ListAdventurersComponent implements OnInit {
  adventurersList: Adventurer[] = ADVENTURERS;
  test: number[] = [1,2,3];
  constructor(
    private router: Router
  ) {}


  ngOnInit(): void {
    console.log("init app-list-adventurers");
  }

  /*goToAbout() { //Example for navigation
    this.router.navigate(['/about']);
  }*/
}
