type TI<T, U> = T extends U[] ? U : T;
type TII<T> = T extends (infer U)[] ? U : T;

type TT1 = TI<string[], string>;
type TT2 = TI<string, string>;

type TTI1 = TII<string[]>;
type TTI2 = TII<string>;
