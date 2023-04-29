export interface IMeta {
  insertId: number;
}

export interface IToken {
  token: string;
}

export interface IUser {
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface INewUser {
  id: number,
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface INewProduct {
  id: number;
  name: string;
  amount: string;
}
