import { Component } from '@angular/core';
import { WcsAngularModule } from 'wcs-angular';

@Component({
  selector: 'app-pointage',
  standalone: true,
  imports: [WcsAngularModule],
  templateUrl: './pointage.component.html',
  styleUrl: './pointage.component.scss',
})
export class PointageComponent {}
