interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

type Combine<T, U> = {
  // [key in keyof (T & U)]: key extends keyof T
  //   ? key extends keyof U
  //     ? T[key] | U[key]
  //     : T[key]
  //   : U[key];
  [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
};
type ICombined = Combine<IUser, IDept>;
