export class Actor {
  name: any;
  mass: any;
  gender: any;
  skin_color: any;
  birth_year: any;

  constructor(name: any, mass: any, gender: any, skin_color: any, birth_year: any) {
    this.name = name;
    this.mass = mass;
    this.gender = gender;
    this.skin_color = skin_color;
    this.birth_year = birth_year;
  }

  getName() {
    return this.name;
  }

  getMass() {
    return this.mass;
  }

  getGender() {
    return this.gender;
  }

  getSkinColor() {
    return this.skin_color;
  }

  getBirthYear() {
    return this.birth_year;
  }
}
