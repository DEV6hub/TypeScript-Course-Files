const sqrt: (x: number) => number = Math.sqrt;

export function square(x: number): number {
  return x * x;
}

export function diag(x: number, y: number): number {
  return sqrt(square(x) + square(y));
}
