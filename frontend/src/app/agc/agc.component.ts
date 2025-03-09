import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbar } from '@angular/material/toolbar';
import { WcsAngularModule } from 'wcs-angular';

@Component({
  selector: 'app-agc',
  standalone: true,
  imports: [MatToolbar, WcsAngularModule, FormsModule],
  templateUrl: './agc.component.html',
  styleUrl: './agc.component.scss',
})
export class AgcComponent {
  toto = '';
  affiche(): void {
    console.log(this.toto);
  }
}
