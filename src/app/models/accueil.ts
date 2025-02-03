export class Accueil {
  localisation?: string;
  id: string;

  constructor(
    public title: string,
    public description: string,
    public createdAt: Date,
    public snap: number,
    public imageUrl: string
  ) {
    this.id = crypto.randomUUID().substring(0.8);
  }

  ajouteSnap() {
    this.snap++;
  }

  enleveSnap() {
    this.snap--;
  }

  setLocation(location: string): void {
    this.localisation = location;
  }

  withLocation(location: string): Accueil {
    this.setLocation(location);
    return this;
  }
}
