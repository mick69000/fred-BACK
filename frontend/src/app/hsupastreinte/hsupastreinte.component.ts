import { HsupastreinteService } from '../services/hsupastreinte.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WcsAngularModule } from 'wcs-angular';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { formatDate } from '@angular/common';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-hsupastreinte',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [WcsAngularModule, FormsModule, NgxMaterialTimepickerModule],
  templateUrl: './hsupastreinte.component.html',
  styleUrl: './hsupastreinte.component.scss',
})
export class HsupastreinteComponent implements OnInit {
  dDJB = formatDate(new Date(), 'yyyy-MM-dd', 'fr');

  ngOnInit(): void {
    const returnDeDiffH = this.hsupastreinteService.diffH(
      this.heureDebut,
      this.heureFin,
      this.dateDebut,
      this.dateFin
    );
    this.heureSaisie = returnDeDiffH[0];
    this.plusieurJours = returnDeDiffH[1];
  }
  constructor(private hsupastreinteService: HsupastreinteService) {}

  dateDebut = this.dDJB;
  dateFin = this.dDJB;
  heureDebut = '12:00';
  heureFin = '12:15';
  toggle = false;
  supAstr = 'H-sup';
  heureSaisie = '--:--';
  heureDuMois = '0:0';
  heureDeLAnnee = '0:0';
  heureMin = this.heureDebut;
  private _heureMinDynamic: string = this.heureMin;
  plusieurJours: string = '';

  get heureMinDynamic(): string {
    return this._heureMinDynamic;
  }

  set heureMinDynamic(value: string) {
    this._heureMinDynamic = value;
  }

  categorie() {
    this.supAstr = !this.toggle ? 'H-sup' : 'Astr.';
  }

  diffH(newTimeFin: string | null) {
    const tempo = newTimeFin ?? this.heureFin;

    const returnDeDiffH = this.hsupastreinteService.diffH(
      this.heureDebut,
      tempo,
      this.dateDebut,
      this.dateFin
    )[0];
    this.heureSaisie = returnDeDiffH[0];
    this.plusieurJours = returnDeDiffH[1];
  }

  onDateDebutChange(newDate: string) {
    this.dateFin = newDate;
    const returnDeDiffH = this.hsupastreinteService.diffH(
      this.heureDebut,
      this.heureFin,
      newDate,
      newDate
    );
    this.heureSaisie = returnDeDiffH[0];
    this.plusieurJours = returnDeDiffH[1];
  }
  onDateFinChange(newDate: string) {
    this.heureFin = this.hsupastreinteService.ajoute15Minutes(this.heureDebut);
    if (this.dateDebut === newDate) {
      this.heureMinDynamic = this.heureDebut;
    } else {
      this.heureMinDynamic = '00:00';
    }
    const returnDeDiffH = this.hsupastreinteService.diffH(
      this.heureDebut,
      this.heureFin,
      this.dateDebut,
      newDate
    );
    this.heureSaisie = returnDeDiffH[0];
    this.plusieurJours = returnDeDiffH[1];
  }

  onTimeFChange(newTime: string) {
    const returnDeDiffH = this.hsupastreinteService.diffH(
      this.heureDebut,
      newTime,
      this.dateDebut,
      this.dateFin
    );
    this.heureSaisie = returnDeDiffH[0];
    this.plusieurJours = returnDeDiffH[1];
  }
  onTimeDChange(newTime: string) {
    if (this.dateDebut === this.dateFin) {
      this.heureFin = this.hsupastreinteService.ajoute15Minutes(newTime);
      this.heureMinDynamic = newTime;
    } else {
      this.heureFin = this.heureDebut;
      this.heureMinDynamic = '00:00';
    }
    const returnDeDiffH = this.hsupastreinteService.diffH(
      newTime,
      this.heureFin,
      this.dateDebut,
      this.dateFin
    );
    this.heureSaisie = returnDeDiffH[0];
    this.plusieurJours = returnDeDiffH[1];
  }
}
/*
backend => npm run dev
frontend => ng serve
 */
