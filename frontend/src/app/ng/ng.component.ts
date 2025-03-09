import { Component } from '@angular/core';
import { WcsAngularModule } from 'wcs-angular';

@Component({
  selector: 'app-ng',
  standalone: true,
  imports: [WcsAngularModule],
  templateUrl: './ng.component.html',
  styleUrl: './ng.component.scss',
})
export class NgComponent {}
