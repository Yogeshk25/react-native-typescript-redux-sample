export class User {
  id: number;
  name: string;
  gender: string;
  phone: string;

  constructor(id: number, name: string, gender: string, phone: string) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.phone = phone;
  }
}
