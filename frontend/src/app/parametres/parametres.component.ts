import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WcsAngularModule } from 'wcs-angular';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parametres',
  standalone: true,
  imports: [WcsAngularModule, CommonModule],
  templateUrl: './parametres.component.html',
  styleUrl: './parametres.component.scss',
})
export class ParametresComponent implements OnInit {
  engins: any[] = [];
  @ViewChild('ajoutNG') ajoutNG!: ElementRef<HTMLDialogElement>;
  @ViewChild('ajoutAGC') ajoutAGC!: ElementRef<HTMLDialogElement>;
  @ViewChild('ajoutR2N') ajoutR2N!: ElementRef<HTMLDialogElement>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllEngins().subscribe((data) => {
      this.engins = data.engins;
    });
  }

  ajouteUneRame(type: string, numero: string) {
    console.log(type, numero);
    if (numero.length !== 0) {
      this.apiService.setEngin(type, numero).subscribe(() => {
        alert('Rame ajoutée avec succes !!!');
      });
    }

    switch (type) {
      case 'NG':
        this.ajoutNG.nativeElement.close();
        break;
      case 'AGC':
        this.ajoutAGC.nativeElement.close();
        break;
      case 'R2N':
        this.ajoutR2N.nativeElement.close();
        break;
    }
  }
}
