import { usersDataSource } from "./database";
import { UData } from "./interfaces";

export default class User {
  //Encapsulamiento

  private _id: number;
  private _name: string;
  private _email: string;
  private _password: string;
  private _isActive: boolean;
  private _roleId: number;
  static idCounter: number = 1;

  // Constructor para asignar

  constructor() {
    this._id = 0;
    this._name = "";
    this._email = "";
    this._password = "";
    this._isActive = true;
    this._roleId = 0;
  }

  //Getters y setters de cada una de las propiedades encapsuladas y posteriormente asignadas

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  get roleId(): number {
    return this._roleId;
  }

  set roleId(value: number) {
    this._roleId = value;
  }

  //Métodos estáticos QUE SE PUEDEN INVOCAR/EJECUTAR sin necesidad de haber instanciadol a clase previamente

  //C
  static create(data: UData) {
    const user = { id: User.idCounter++, ...data };
    usersDataSource.push(user);
    return data;
  }


 //R
  static find() {
    return usersDataSource;
  }

  //R
  static findById(id: number) {
    return usersDataSource.find((user: UData) => user.id === id);
  }

  //U
  static update(id: number, data: UData) {
    let index = usersDataSource.findIndex((user: UData) => user.id === id);
    if (index !== -1) {
      usersDataSource[index] = { ...usersDataSource[index], ...data };
      return usersDataSource[index];
    } else {
      return null;
    }
  }

  //D
  static delete(id: number) {
    let index = usersDataSource.findIndex((user: UData) => user.id === id);
    if (index !== -1) {
      usersDataSource.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
}
