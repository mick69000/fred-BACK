import { AccueilService } from './../services/accueils.service';
import { Component, Input, OnInit } from '@angular/core';
import { Accueil } from '../models/accueil';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent implements OnInit {
  constructor(private accueilService: AccueilService) {}

  @Input() accueil!: Accueil;

  texteBouton!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.texteBouton = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  onClickImage() {
    if (this.texteBouton == 'Oh Snap!') {
      this.accueilService.snapAccueilById(this.accueil.id);
      this.userHasSnapped = !this.userHasSnapped;
      this.texteBouton = 'Oops Snap!';
    } else {
      this.accueil.enleveSnap();
      this.texteBouton = 'Oh Snap!';
      this.userHasSnapped = !this.userHasSnapped;
    }
  }
}
