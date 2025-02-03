import { Injectable } from '@angular/core';
import { Accueil } from '../models/accueil';

@Injectable({
  providedIn: 'root',
})
export class AccueilService {
  private monAccueils: Accueil[] = [
    new Accueil(
      'Le Suivi Pour Fred',
      'Pour le petit Fred qui galère avec VBA',
      new Date(),
      0,
      'https://images.pexels.com/photos/30352190/pexels-photo-30352190/free-photo-of-tressage-traditionnel-des-cheveux-des-femmes-en-exterieur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Accueil(
      'Un deuxieme Pour Fred',
      'Pour le petit Fred qui grandi avec VBA',
      new Date(),
      50,
      'https://images.pexels.com/photos/30352190/pexels-photo-30352190/free-photo-of-tressage-traditionnel-des-cheveux-des-femmes-en-exterieur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ).withLocation("Je pense que l'on peut passer au suivant"),
    new Accueil(
      'Et un troisième Pour Fred',
      'Fred est devenu GRAND',
      new Date(),
      130,
      'https://images.pexels.com/photos/30352190/pexels-photo-30352190/free-photo-of-tressage-traditionnel-des-cheveux-des-femmes-en-exterieur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
  ];

  getAccueil(): Accueil[] {
    return [...this.monAccueils];
  }

  snapAccueilById(monAccueilId: string): void {
    const foundMonAccueil = this.monAccueils.find(
      (monAccueil) => monAccueil.id === monAccueilId
    );
    if (!foundMonAccueil) {
      throw new Error('Je ne le trouve pas !!!!');
    }
    foundMonAccueil.ajouteSnap();
  }
}
