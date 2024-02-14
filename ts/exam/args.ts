function add(a: number, b: string) {
  return `${a} - ${b}`;
}

type FirstArgs<F> = F extends (a: infer First, ...b: any) => any
  ? First
  : never;
type SecondArgs<F> = F extends (a: any, b: infer Second, ...r: any) => any
  ? Second
  : never;
type Args<F> = F extends (...args: infer P) => any ? P[number] : never;

type A = FirstArgs<typeof add>; // number
type B = SecondArgs<typeof add>; // string

type C = Args<typeof add>; // number | string

type AX1 = Args<typeof String.prototype.endsWith>;
// ⇒ string | number | undefined
type AX2 = Args<typeof String.prototype.charAt>;
// ⇒ number
