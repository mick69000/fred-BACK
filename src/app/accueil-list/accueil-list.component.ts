import { AccueilService } from './../services/accueils.service';
import { Accueil } from './../models/accueil';
import { Component, OnInit } from '@angular/core';
import { AccueilComponent } from '../accueil/accueil.component';

@Component({
  selector: 'app-accueil-list',
  standalone: true,
  imports: [AccueilComponent],
  templateUrl: './accueil-list.component.html',
  styleUrl: './accueil-list.component.scss',
})
export class AccueilListComponent implements OnInit {
  monAccueil!: Accueil[];

  constructor(private accueilService: AccueilService) {}

  ngOnInit(): void {
    this.monAccueil = this.accueilService.getAccueil();
  }
}
