export default class UserEntity {
  name: string;
  id?: string | null;
  constructor(id: string | null, name: string) {
    this.name = name;
    this.id = id;
  }
}
